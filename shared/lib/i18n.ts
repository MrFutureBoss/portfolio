// lib/i18n.ts
// Toàn bộ text hiển thị theo ngôn ngữ, dùng chung cho cả site

export const TRANSLATIONS = {
    vi: {
        nav: {
            about: "Giới thiệu về tôi",
            experience: "Kinh nghiệm",
            projects: "Dự án",
            skills: "Kỹ năng",
        },
        header: {
            name: "Mai Tu",
            role: "Frontend Developer",
            viewCv: "Xem CV",
            contact: "Liên hệ",
        },
        contact: {
            contactTitle: "Thông tin liên hệ",
            addressLabel: "Địa chỉ",
            addressDetail: "180 Phố Vọng, phường Tương Mai, tp Hà Nội",
            emailLabel: "Email",
            phoneLabel: "Số điện thoại (+Zalo)",
            githubLabel: "GitHub",
            facebookLabel: "Facebook",
            LinkedinLabel: "Linkedin"
        },
        about: {
            badge: "Giới thiệu",
            headingPrefix: "Xin chào, mình là",
            study: "Đại học FPT, ngành Công nghệ thông tin",
            born: "Sinh năm",
            description: "Mình tập trung vào việc xây dựng các sản phẩm web hiện đại, dễ dùng và có trải nghiệm người dùng tốt.",
        },
        copy: {
            copiedSuccess: "Sao chép link thành công",
            copiedFail: "Sao chép link thất bại",
            mailCopiedDesciption: "đã được sao chép.",
            mailCopied: "Đã sao chép mail!",
            mailCopiedFail: "Sao chép mail thất bại!",
            itemCopied: "Đã sao chép!",
            itemCopiedDesc: "đã được sao chép vào bộ nhớ tạm.",
            allCopied: "Đã sao chép tất cả!",
            allCopiedDesc: "Toàn bộ thông tin liên hệ đã được sao chép.",
        },
        placeholder: {
            /** Project search placeholder */
            prjSearch: "Tìm tên dự án...",
            /** Project filter type */
            prjFType: "Thể loại",
            /** Project filter time */
            prjFTime: "Thời gian"
        },
        notFound: {
            /** Project Search not found */
            prjSrchNF: "Không tìm thấy dự án phù hợp.",
        },
        button: {
            detailBtn: "Chi tiết",
            copiedBtn: "Đã sao chép",
            copyLinkBtn: "Sao chép link",
            downloadBtn: "Tải xuống",
            copyAllBtn: "Sao chép tất cả",
        },
        resume: {
            cvTitle: "Xem sơ yếu lý lịch",
            cvGuide: "Xem bản xem trước bên dưới, hoặc tải xuống / chia sẻ tệp."
        },
        switch: {
            lang: "Ngôn ngữ",
            theme: "Giao diện"
        }
    },
    en: {
        nav: {
            about: "About me",
            experience: "Experience",
            projects: "Projects",
            skills: "Skills",
        },
        header: {
            name: "Mai Tu",
            role: "Frontend Developer",
            viewCv: "View CV",
            contact: "Contact",
        },
        contact: {
            contactTitle: "Contact information",
            addressLabel: "Address",
            addressDetail: "Street 180 Pho Vong, Hanoi, Vietnam",
            emailLabel: "Email",
            phoneLabel: "Phone (+Zalo)",
            githubLabel: "GitHub",
            facebookLabel: "Facebook",
            LinkedinLabel: "Linkedin"
        },
        about: {
            badge: "About me",
            headingPrefix: "Hi, I'm",
            study: "FPT University, Information Technology major",
            born: "Born in",
            description: "I focus on building modern, user-friendly web products with great user experience.",
        },
        copy: {
            copiedSuccess: "Copied link to clipboard",
            copiedFail: "Couldn't copy link",
            mailCopiedDesciption: "has been copied to your clipboard.",
            mailCopied: "Mail copied!",
            mailCopiedFail: "Failed to copy email!",
            itemCopied: "Copied!",
            itemCopiedDesc: "has been copied to clipboard.",
            allCopied: "Copied all!",
            allCopiedDesc: "All contact info has been copied.",
        },
        placeholder: {
            /** Project search placeholder */
            prjSearch: "Find project name...",
            /** Project filter type */
            prjFType: "Type",
            /** Project filter time */
            prjFTime: "Time"
        },
        notFound: {
            /** Project Search not found */
            prjSrchNF: "No projects found.",
        },
        button: {
            detailBtn: "Detail",
            copiedBtn: "Copied",
            copyLinkBtn: "Copy link",
            downloadBtn: "Download",
            copyAllBtn: "Copy all",
        },
        resume: {
            cvTitle: "Resume",
            cvGuide: "Preview below, or download / share the file."
        },
        switch: {
            lang: "Language",
            theme: "Theme"
        }
    },
} as const;

export type Lang = keyof typeof TRANSLATIONS;