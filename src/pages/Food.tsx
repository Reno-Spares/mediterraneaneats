import { business, menu } from '../data'

export default function Food() {
  return (
    <>
      <section className="page-head">
        <div className="shell">
          <p className="eyebrow">The menu</p>
          <h1 className="page-title">
            Food off the <span className="script-inline">truck</span>
          </h1>
          <p className="page-lede">
            Everything is cooked to order on board. Dips, tabouli and fattoush
            are made fresh each morning; the fryer runs all day for the dagwood
            dogs and twisties. Prices vary by event — ask at the window.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell menu-wrap">
          {menu.map((section) => (
            <div className="menu-section" key={section.title}>
              <h2 className="menu-heading">{section.title}</h2>
              <ul className="menu-list">
                {section.items.map((item) => (
                  <li className="menu-item" key={item.name}>
                    <div className="menu-item-head">
                      <h3>{item.name}</h3>
                      <span className="menu-dots" aria-hidden="true" />
                    </div>
                    <p>{item.blurb}</p>
                    {item.tags && (
                      <ul className="tag-row">
                        {item.tags.map((tag) => (
                          <li className="tag" key={tag}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-navy">
        <div className="shell cta">
          <div>
            <h2 className="section-title">Catering & dietaries</h2>
            <p>
              Vegetarian and vegan plates are easy for us — most of the dip and
              salad menu is already vegan. Let us know about allergies when you
              book and we will work around them.
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href="#/contact">
              Enquire about catering
            </a>
            <a className="btn btn-ghost" href={business.phoneHref}>
              {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
