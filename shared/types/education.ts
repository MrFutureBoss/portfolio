export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  school: string;
  location?: string;
  /** Loại thông tin điểm số -> component sẽ lấy label tương ứng từ i18n */
  detailType?: "gpa" | "score";
  /** Giá trị thô, không đổi theo ngôn ngữ nên không cần lặp lại ở cả vi/en */
  detailValue?: string;
}