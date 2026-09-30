import { useState } from "react";
import { popSubjects } from "../../../data/popSubjects";
import "./SubjectButtons.css";

// 科目ボタン（国語・英語・数学…）。押すと「開いた状態」（aria-expanded="true"）に切り替わる。
//
// HTML の形は、次の例をそのまま使っている。ボタンの見た目は sb.css（components/ui/SubjectButton）のクラスを使う。
//   <ul class="subject-list">
//     <li><button type="button" class="subject-btn" aria-expanded="false">国語<span class="subject-btn__icon" aria-hidden="true"></span></button></li>
//   </ul>
//
// openSubject … 今「開いている」科目の名前。何も開いていないときは null。
//   同時に開けるのは1科目だけ（別の科目を押すと、前に開いていた科目は閉じる）。
// ⚠️ 今は「ボタンの見た目が切り替わる」だけで、開いた先に表示する中身（その科目の参考書一覧など）は未実装。
export function SubjectButtons() {
  const [openSubject, setOpenSubject] = useState<string | null>(null);

  return (
    <section className="gr-subject-buttons" aria-label="科目">
      <div className="gr-container">
        <ul className="subject-list">
          {popSubjects.map((subject) => {
            const expanded = openSubject === subject;
            return (
              <li key={subject}>
                <button
                  type="button"
                  className="subject-btn"
                  aria-expanded={expanded}
                  onClick={() => setOpenSubject(expanded ? null : subject)}
                >
                  {subject}
                  <span className="subject-btn__icon" aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
