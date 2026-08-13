"use client"

import { useState } from "react"
import { Check, Copy, Download } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useLanguage } from "../providers/language-provider"
import { TRANSLATIONS } from "@/shared/lib/i18n"

// Public asset served from /public/assets/files/resumes/cv.pdf
const RESUME_PATH = "/assets/files/resumes/cv.pdf"
// Filename applied when the visitor downloads the file
const RESUME_DOWNLOAD_NAME = "CV-Fresher-FullStack-Developer-Mai-Ngoc-Tu.pdf"
// Shareable Google Drive link (separate from the file actually served)
const RESUME_SHARE_LINK =
    "https://drive.google.com/file/d/1eDjZvTajcA7LWUsIjl2RWSu3QZ7jf-9J/view?usp=drive_link"

interface ResumeDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function ResumeDialog({ open, onOpenChange }: ResumeDialogProps) {
    const { lang } = useLanguage();
    const t = TRANSLATIONS[lang];
    const [copied, setCopied] = useState(false);

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(RESUME_SHARE_LINK)
            setCopied(true)
            toast.success(`${t.toast.copiedSuccess}`);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            toast.error(`${t.toast.copiedFail}`);
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="flex h-[85vh] max-w-3xl flex-col gap-0 p-0">
                <DialogHeader className="shrink-0 border-b px-6 py-4">
                    <DialogTitle>{t.resume.cvTitle}</DialogTitle>
                    <DialogDescription>
                        {t.resume.cvGuide}
                    </DialogDescription>
                </DialogHeader>

                <div className="min-h-0 flex-1 bg-muted">
                    <iframe
                        src={`${RESUME_PATH}#toolbar=0`}
                        title="Resume preview"
                        className="h-full w-full"
                    />
                </div>

                <div className="flex shrink-0 flex-col-reverse gap-2 border-t px-6 py-4 sm:flex-row sm:justify-end">
                    <Button variant="outline" onClick={handleCopyLink}>
                        {copied ? <Check /> : <Copy />}
                        {copied ? t.button.copiedBtn : t.button.copyLinkBtn}
                    </Button>

                    <Button asChild>
                        <a href={RESUME_PATH} download={RESUME_DOWNLOAD_NAME}>
                            <Download />
                            {t.button.downloadBtn}
                        </a>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}