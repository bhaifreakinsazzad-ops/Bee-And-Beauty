import { useState, FormEvent } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// trackingPayload.formData/formLabels are only for standard CRM field keys.
// Non-standard/custom fields must go through customFields/fileFields/imageDataFields
// using the id returned by register_custom_field. Labels stay human-readable.
type StandardTrackingFieldKey = string;
type RegisteredCustomFieldId = string;
type TrackingCustomField = { value?: unknown; label: string };
type TrackingFileField = { file?: File; label: string };
type TrackingImageDataField = { dataUrl?: string; label: string };

const postTrackingEvent = (
  trackingPayload: Record<string, unknown> & {
    formData: Record<StandardTrackingFieldKey, unknown>;
    formLabels: Record<StandardTrackingFieldKey, string>;
  },
  options: {
    customFields?: Record<RegisteredCustomFieldId, TrackingCustomField>;
    fileFields?: Record<RegisteredCustomFieldId, TrackingFileField>;
    imageDataFields?: Record<RegisteredCustomFieldId, TrackingImageDataField>;
  } = {},
) => {
  const { customFields = {}, fileFields = {}, imageDataFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };
  const body = new FormData();

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(imageDataFields)) {
    const dataUrl = field.dataUrl;
    if (!dataUrl) continue;
    if (!dataUrl.startsWith("data:image/")) {
      throw new Error("Image data field must be a data:image/* base64 string");
    }
    eventPayload.formData[key] = dataUrl;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(fileFields)) {
    const file = field.file;
    if (!file) continue;
    if (file.size > 50 * 1024 * 1024) {
      throw new Error("File must be 50 MB or smaller");
    }
    eventPayload.formData[key] = {
      filename: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
    };
    eventPayload.formLabels[key] = field.label;
    body.append(key, file, file.name);
  }

  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  body.append("event", JSON.stringify(eventPayload));

  fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
    method: "POST",
    headers: {
      version: "2021-07-28",
    },
    body,
  }).catch(() => {}); // Fire-and-forget — don't block form UX
};

interface NewsletterSignupProps {
  variant?: "light" | "dark";
  className?: string;
}

const NewsletterSignup = ({
  variant = "light",
  className,
}: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const isDark = variant === "dark";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast({
        title: "Enter a valid email",
        description: "We need a real email to send your glow tips.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    const trackingPayload = {
      type: "external_form_submission",
      timestamp: Date.now(),
      formId: "newsletter-signup",
      formData: {
        email: trimmed,
      },
      formLabels: {
        email: "Email",
      },
      url: window.location.href,
      title: document.title,
      path: window.location.pathname,
      userAgent: navigator.userAgent,
      trackingId: "tk_357f06ab7b814941b389853a2220b21f",
      locationId: "jvTNwBPMkwa1N3wbDtYX",
      projectId: "1788045264032144954",
      sessionId: crypto.randomUUID(),
      properties: {
        deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
          ? "mobile"
          : "desktop",
        source: "ai_studio",
        projectId: "1788045264032144954",
        formName: "Newsletter Signup",
      },
    };

    postTrackingEvent(trackingPayload);

    toast({
      title: "You're on the list",
      description: "Welcome to the hive — glow tips land in your inbox soon.",
    });
    setEmail("");
    setSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex w-full max-w-md flex-col gap-3 sm:flex-row",
        className,
      )}
    >
      <div className="relative flex-1">
        <Mail
          className={cn(
            "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2",
            isDark ? "text-primary-foreground/50" : "text-muted-foreground",
          )}
        />
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Email address"
          className={cn(
            "pl-9 font-body",
            isDark &&
              "border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-secondary",
          )}
        />
      </div>
      <Button
        type="submit"
        disabled={submitting}
        className="bg-secondary font-body text-secondary-foreground hover:bg-secondary/90"
      >
        Join the Hive
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default NewsletterSignup;
