import { SiteCtaButton } from "../../../ui/SiteCtaButton/SiteCtaButton";
import { campusRegions, schoolListHref } from "../../../../data/siteNav";
import "./SchoolBuildingSection.css";

export function SchoolBuildingSection() {
  const [firstRegion, ...restRegions] = campusRegions;
  const otherRegion = restRegions.find((r) => r.region === "その他");
  const mainRegions = restRegions.filter((r) => r.region !== "その他");

  return (
    <section className="gr-school">
      <div className="gr-container">
        <p className="gr-school__eyebrow gr-en">SCHOOL BUILDING</p>
        <h2 className="gr-school__heading">全国に校舎を展開中</h2>

        <div className="gr-school__grid">
          <div className="gr-school__region">
            <p className="gr-school__region-name">{firstRegion.region}</p>
            <ul className="gr-school__campus-list">
              {firstRegion.campuses.map((c) => (
                <li key={c}>
                  <a href={schoolListHref}>{c}</a>
                </li>
              ))}
            </ul>

            {otherRegion && (
              <div className="gr-school__other">
                <p className="gr-school__region-name">{otherRegion.region}</p>
                <ul className="gr-school__campus-list">
                  {otherRegion.campuses.map((c) => (
                    <li key={c}>
                      <a href={schoolListHref}>{c}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {mainRegions.map((r) => (
            <div key={r.region} className="gr-school__region">
              <p className="gr-school__region-name">{r.region}</p>
              <ul className="gr-school__campus-list gr-school__campus-list--cols">
                {r.campuses.map((c) => (
                  <li key={c}>
                    <a href={schoolListHref}>{c}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="gr-school__cta">
          <SiteCtaButton tone="blue" size="large" arrow href={schoolListHref}>
            現論会の校舎を探す
          </SiteCtaButton>
        </div>
      </div>
    </section>
  );
}
