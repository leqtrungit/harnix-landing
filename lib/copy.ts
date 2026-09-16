/**
 * Site copy. Vietnamese is the source of truth; the English pass covers nav and
 * hero only (per §9.1 of the brief), so every other key falls back to VI.
 */

export type Lang = "vi" | "en";

export const LANGS: Lang[] = ["vi", "en"];

export type TraceKind = "ok" | "info" | "warn" | "err";

export type OpIcon = "eye" | "stop" | "coin" | "plug" | "shield" | "check";

const vi = {
  // --- nav / global CTAs -------------------------------------------------
  navHow: "Cách hoạt động",
  navDemo: "Demo",
  navDev: "Developer",
  navBlog: "Blog",
  navFaq: "FAQ",
  ctaJoin: "Tham gia waitlist",
  ctaDemo: "Xem demo",
  themeLabel: "Đổi giao diện sáng/tối",
  langLabel: "Ngôn ngữ",
  skipToContent: "Tới nội dung chính",

  // --- hero --------------------------------------------------------------
  eyebrow: "AI AGENT OPERATIONS PLATFORM",
  statusPill: "Đang xây dựng · ",
  heroH1: "Giao việc cho AI. Nắm từng bước.",
  heroSub:
    "Harnix giúp doanh nghiệp đưa trợ lý AI vào app sẵn có, và thấy rõ từng câu trả lời: AI đã đọc tài liệu nào, gọi công cụ gì, tốn bao nhiêu.",
  sampleNote: "Nội dung mẫu, dùng để minh hoạ.",
  heroFrameLabel: "Ảnh minh hoạ console Harnix",

  // --- why ---------------------------------------------------------------
  worryHead: "Trợ lý AI thì dễ làm. Vận hành nó mới khó.",
  w1t: "AI trả lời sai, ai biết?",
  w1b: "Chatbot đóng gói sẵn là một hộp đen. Bạn chỉ biết có vấn đề khi khách phàn nàn.",
  w2t: "Chi phí chạy theo từng câu hỏi",
  w2b: "Không biết mỗi câu trả lời tốn bao nhiêu thì không kiểm soát được ngân sách.",
  w3t: "Dữ liệu khách hàng đi đâu?",
  w3b: "Tài liệu nội bộ và hội thoại của khách cần được tách riêng và xoá được khi khách yêu cầu.",

  // --- how it works ------------------------------------------------------
  labHow: "Cách hoạt động",
  howHead: "Từ con số 0 tới trợ lý trong app của bạn",
  s1t: "Nạp tri thức",
  s1b: "Tải tài liệu (PDF, DOCX, TXT, MD) vào knowledge base.",
  s2t: "Tạo agent",
  s2b: "Chọn model của bạn, viết system prompt, gắn knowledge base và tool.",
  s3t: "Nhúng vào app",
  s3b: "Backend đổi API key lấy token ngắn hạn, frontend gắn widget chat.",

  // --- demo --------------------------------------------------------------
  demoHead: "Xem cả quy trình trong {N} phút",
  demoSub: "Từ một tổ chức trống tới trợ lý AI đang trả lời khách trong app mẫu.",
  demoSoonPill: "Video demo sắp ra mắt",
  notifyCta: "Nhận thông báo khi có video",
  playLabel: "Phát video demo",
  transcriptLink: "Xem bản ghi nội dung →",
  labChapters: "Nội dung video",

  // --- run anatomy -------------------------------------------------------
  anatomyHead: "Mổ xẻ một Run",
  anatomySub: "Mỗi câu trả lời là một Run, được ghi lại từng bước.",

  // --- operate -----------------------------------------------------------
  opHead: "Quản AI như quản một nhân viên",

  // --- developer ---------------------------------------------------------
  devHead: "Cho developer",
  devBadge: "Preview · M2",
  tab1Label: "1. Backend: đổi token",
  tab2Label: "2. Frontend: gắn widget",
  codeCaption: "Mã minh hoạ. API chưa chốt.",
  d1: "API key chỉ nằm ở server",
  d2: "Streaming + trích dẫn",
  d3: "Widget cách ly CSS (shadow DOM)",
  docsLink: "Đọc tài liệu tích hợp →",
  docsSoon: "Tài liệu chưa có",
  docsSoonLabel: "Docs (sắp có)",
  linkSoon: "Sắp có",

  // --- blog --------------------------------------------------------------
  blogHead: "Đang xây dựng công khai",
  blogLink: "Đọc blog →",
  blogEmptyTitle: "Bài viết đầu tiên sắp ra mắt",
  blogEmptyBody:
    "Chúng tôi sẽ viết lại quá trình xây dựng Harnix, từng milestone một.",
  blogErrorText: "Không tải được bài viết.",
  retryLabel: "Thử lại",
  blogLoadingLabel: "Đang tải bài viết…",

  // --- design partner ----------------------------------------------------
  partnerHead: "Trở thành design partner",
  partnerSub: "Chúng tôi tìm 1–3 doanh nghiệp dùng thử sớm.",
  youGetLabel: "Bạn nhận được",
  weAskLabel: "Chúng tôi cần",
  g1: "Dùng miễn phí trong thời gian pilot",
  g2: "Hỗ trợ tích hợp trực tiếp",
  g3: "Ảnh hưởng tới roadmap",
  a1: "Một buổi feedback mỗi tuần",
  a2: "Cho phép viết case study (khi bạn đồng ý)",

  fName: "Họ tên",
  fEmail: "Email công việc",
  fCompany: "Công ty",
  fSize: "Quy mô (không bắt buộc)",
  fApp: "App bạn đang có",
  fWant: "Bạn muốn AI làm gì?",
  namePlaceholder: "Nguyễn Văn A",
  emailPlaceholder: "ten@congty.vn",
  sizeUnset: "—",

  eNameText: "Vui lòng nhập họ tên.",
  eEmailText: "Email không hợp lệ.",
  eCompanyText: "Vui lòng nhập tên công ty.",
  eAppText: "Chọn một lựa chọn.",
  eWantText: "Mô tả ngắn công việc bạn muốn AI làm.",

  submitLabel: "Gửi đăng ký",
  submitSending: "Đang gửi…",
  formSuccess: "Đã nhận. Chúng tôi sẽ liên hệ trong vài ngày.",
  formAgain: "Gửi đăng ký khác",
  serverErrorText:
    "Không gửi được lúc này. Vui lòng thử lại, hoặc email hello@harnix.vn.",

  // --- waitlist ----------------------------------------------------------
  finalHead: "Sẵn sàng giao việc cho AI mà vẫn nắm từng bước?",
  waitIdle: "Chúng tôi chỉ gửi email khi có bản dùng thử.",
  waitBad: "Email không hợp lệ.",
  waitOk: "Đã ghi nhận email của bạn.",
  waitSending: "Đang gửi…",
  waitError: "Không gửi được lúc này. Vui lòng thử lại.",

  // --- footer ------------------------------------------------------------
  footTagline:
    "Nền tảng vận hành AI agent. Mỗi câu trả lời là một Run, ghi lại từng bước.",
} as const;

const en: Partial<Record<keyof typeof vi, string>> = {
  navHow: "How it works",
  navDemo: "Demo",
  navDev: "Developer",
  navBlog: "Blog",
  navFaq: "FAQ",
  ctaJoin: "Join the waitlist",
  ctaDemo: "Watch the demo",
  statusPill: "In development · ",
  heroH1: "Harness every run.",
  heroSub:
    "Harnix lets businesses put AI agents into the apps they already have, and see every answer end to end: what the agent read, which tools it called, and what it cost.",
};

export type CopyKey = keyof typeof vi;

const dictionaries: Record<Lang, Partial<Record<CopyKey, string>>> = { vi, en };

export function translate(lang: Lang, key: CopyKey): string {
  return dictionaries[lang][key] ?? vi[key];
}

/* -------------------------------------------------------------------------
   Structured content. Vietnamese only — the EN pass does not cover it.
------------------------------------------------------------------------- */

export const faqs: { q: string; a: string }[] = [
  {
    q: "Harnix đã dùng được chưa?",
    a: "Chưa. Chúng tôi đang xây dựng và mở cho design partner trước. Tham gia waitlist để được báo khi mở.",
  },
  {
    q: "“Tự mang model” nghĩa là gì?",
    a: "Bạn dùng API key của nhà cung cấp LLM bạn chọn (OpenAI-compatible) hoặc model tự host có thể truy cập qua internet. Harnix không bán model.",
  },
  {
    q: "Dữ liệu của tôi lưu ở đâu, ai xem được?",
    a: "Mỗi doanh nghiệp có vùng dữ liệu riêng; người dùng cuối chỉ xem được hội thoại của chính họ; dữ liệu cá nhân xoá được theo yêu cầu.",
  },
  {
    q: "Có phụ thuộc ngành không?",
    a: "Không. Chuyên môn của agent đến từ tài liệu và cấu hình của bạn.",
  },
  {
    q: "Giá bao nhiêu?",
    a: "Chưa công bố. Design partner dùng miễn phí trong thời gian pilot.",
  },
];

/**
 * Demo chapters. `needs` is the milestone the step depends on. `at` is the
 * start offset in seconds — placeholder spacing until the video is cut, and
 * only surfaced once the demo is marked ready.
 */
export const chapters: { label: string; needs: string; at: number }[] = [
  { label: "Đăng nhập, tổ chức trống", needs: "M0", at: 0 },
  { label: "Nạp tài liệu", needs: "M1", at: 15 },
  { label: "Tạo agent", needs: "M0", at: 30 },
  { label: "Thử và xem trace", needs: "M1+M3", at: 45 },
  { label: "Tạo API key", needs: "M0", at: 60 },
  { label: "Tích hợp vào app", needs: "M2", at: 75 },
  { label: "Người dùng cuối hỏi đáp", needs: "M2", at: 90 },
  { label: "Quay lại console", needs: "M3", at: 105 },
  { label: "Kết", needs: "—", at: 120 },
];

export const traceSteps: {
  step: string;
  note: string;
  kind: TraceKind;
  state: string;
}[] = [
  {
    step: "user_message",
    note: "Khách hỏi: “Chính sách đổi trả trong bao lâu?”",
    kind: "ok",
    state: "completed",
  },
  {
    step: "tool_call knowledge_search",
    note: "AI tìm trong tài liệu “Chính sách bảo hành.pdf”.",
    kind: "info",
    state: "running",
  },
  {
    step: "tool_result · 3 chunks",
    note: "Tìm thấy 3 đoạn liên quan, có trích dẫn.",
    kind: "ok",
    state: "completed",
  },
  {
    step: "llm_call · model gpt-4o-mini",
    note: "Soạn câu trả lời từ các đoạn đó.",
    kind: "ok",
    state: "completed",
  },
  {
    step: "token_usage · 1,240 tokens",
    note: "Chi phí của đúng câu trả lời này, tính theo token in/out.",
    kind: "info",
    state: "measured",
  },
  {
    step: "state_change · completed",
    note: "Hoàn tất. Có thể dừng giữa chừng nếu cần.",
    kind: "ok",
    state: "completed",
  },
];

export const opItems: { icon: OpIcon; title: string; body: string }[] = [
  { icon: "eye", title: "Thấy mọi bước", body: "Trace đầy đủ cho mọi Run." },
  { icon: "stop", title: "Dừng được", body: "Huỷ một Run đang chạy." },
  {
    icon: "coin",
    title: "Biết chi phí",
    body: "Token và chi phí theo từng câu trả lời.",
  },
  {
    icon: "plug",
    title: "Tự chọn model",
    body: "Endpoint OpenAI-compatible hoặc tự host.",
  },
  {
    icon: "shield",
    title: "Dữ liệu tách riêng",
    body: "Mỗi doanh nghiệp một vùng dữ liệu; xoá dữ liệu cá nhân theo yêu cầu (NĐ 13/2023).",
  },
  {
    icon: "check",
    title: "Bền bỉ",
    body: "Worker gặp sự cố thì Run vẫn chạy tiếp và hoàn thành.",
  },
];

export const appOptions: { value: string; label: string }[] = [
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "both", label: "Cả hai" },
];

export const companySizes = ["1-10", "11-50", "51-200", "200+"] as const;

export const CODE_BACKEND = `// 1. Your backend — never expose the API key to the browser
const res = await fetch("https://api.harnix.vn/v1/end-user-tokens", {
  method: "POST",
  headers: { Authorization: \`Bearer \${process.env.HARNIX_API_KEY}\` },
  body: JSON.stringify({ end_user_id: user.id }),
});
const { token } = await res.json();`;

export const CODE_FRONTEND = `<!-- 2. Your frontend -->
<${"script"} src="https://cdn.harnix.vn/widget.js" defer></${"script"}>
<harnix-chat agent="agt_support" token="{{token}}"></harnix-chat>`;
