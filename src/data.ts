export type MenuItem = {
  name: string
  blurb: string
  tags?: string[]
}

export type MenuSection = {
  title: string
  items: MenuItem[]
}

export const menu: MenuSection[] = [
  {
    title: 'Off the Fryer',
    items: [
      {
        name: 'Dagwood Dog',
        blurb: 'The showground classic — battered, golden and served on a stick with sauce and mustard.',
      },
      {
        name: 'Potato Twistie',
        blurb: 'A whole potato spiralled onto a skewer, fried crisp and dusted with your pick of seasoning.',
        tags: ['Vegetarian'],
      },
      {
        name: 'Hot Chips',
        blurb: 'Thick-cut chips, salted and served hot in a bucket built for sharing.',
        tags: ['Vegetarian'],
      },
    ],
  },
  {
    title: 'Wraps & Rolls',
    items: [
      {
        name: 'Chicken Wrap',
        blurb: 'Marinated charcoal chicken, garlic sauce, tabouli and pickles rolled in warm Lebanese bread.',
      },
      {
        name: 'Falafel Roll',
        blurb: 'House-made falafel with hummus, salad and tahini — our best seller with the veggie crowd.',
        tags: ['Vegetarian', 'Vegan option'],
      },
      {
        name: 'Kibbe',
        blurb: 'Cracked wheat shells filled with spiced mince and pine nuts, fried to order.',
      },
      {
        name: 'Sambousik',
        blurb: 'Golden pastry parcels of seasoned meat or cheese, served with a side of sauce.',
      },
    ],
  },
  {
    title: 'Dips & Salads',
    items: [
      {
        name: 'Hummus',
        blurb: 'Slow-blended chickpeas, tahini and lemon, finished with olive oil and warm bread.',
        tags: ['Vegan'],
      },
      {
        name: 'Baba-Ghanouj',
        blurb: 'Smoked eggplant whipped with tahini, garlic and lemon.',
        tags: ['Vegan'],
      },
      {
        name: 'Tabouli',
        blurb: 'Parsley, tomato, mint and cracked wheat with lemon and olive oil. Made fresh every morning.',
        tags: ['Vegan'],
      },
      {
        name: 'Fattoush',
        blurb: 'Garden salad with toasted bread, sumac and a pomegranate dressing.',
        tags: ['Vegan'],
      },
    ],
  },
  {
    title: 'Drinks',
    items: [
      {
        name: 'Cold Drinks',
        blurb: 'Soft drink cans, sparkling and still water — all pulled straight from the ice.',
      },
    ],
  },
]

export type EventEntry = {
  name: string
  place: string
  when: string
  month: string
  note?: string
}

/** Events already worked in the 2026 season, most recent first. */
export const attended: EventEntry[] = [
  { name: 'Edith Markets', place: 'Edith', when: 'August 2026', month: 'Aug', note: 'Regular stop — we are back most market days.' },
  { name: 'Bathurst Winter Festival', place: 'Bathurst', when: 'July 2026', month: 'Jul' },
  { name: 'Oberon Cultural Day', place: 'Oberon', when: 'June 2026', month: 'Jun' },
  { name: 'Bathurst Show', place: 'Bathurst Showground', when: 'May 2026', month: 'May' },
  { name: 'Sofala Show', place: 'Sofala', when: 'May 2026', month: 'May' },
  { name: 'Rockley Rodeo', place: 'Rockley', when: 'April 2026', month: 'Apr' },
  { name: 'Lithgow Ironfest', place: 'Lithgow', when: 'April 2026', month: 'Apr' },
  { name: 'Orange Harmony Day', place: 'Orange', when: 'March 2026', month: 'Mar' },
  { name: 'Bathurst Carnival of Cups', place: 'Tyers Park, Bathurst', when: 'March 2026', month: 'Mar' },
  { name: 'Blayney Show', place: 'Blayney Showground', when: 'February 2026', month: 'Feb' },
  { name: 'Millfest', place: 'Millthorpe', when: 'February 2026', month: 'Feb' },
  { name: 'Orange Australia Day', place: 'Orange', when: 'January 2026', month: 'Jan', note: 'Our very first event as a food truck.' },
]

/** Events booked or invited for the rest of the season, soonest first. */
export const upcoming: EventEntry[] = [
  { name: 'Oberon Agricultural Show', place: 'Oberon Showground', when: 'September 2026', month: 'Sep' },
  { name: 'Burraga Show', place: 'Burraga', when: 'September 2026', month: 'Sep' },
  { name: 'Experience Orange', place: 'Orange', when: 'October 2026', month: 'Oct' },
  { name: 'Bathurst Highland Cattle Show', place: 'Bathurst', when: 'October 2026', month: 'Oct' },
  { name: 'Oberon Redfin Roundup', place: 'Lake Oberon', when: 'October 2026', month: 'Oct' },
  { name: 'Orange Car Show', place: 'Orange', when: 'November 2026', month: 'Nov' },
  { name: 'Bathurst NRL Match', place: 'Carrington Park, Bathurst', when: 'November 2026', month: 'Nov' },
  { name: 'Canowindra International Balloon Challenge', place: 'Canowindra', when: 'December 2026', month: 'Dec' },
]

export const business = {
  name: 'Mediterranean Food Truck',
  owner: 'Jason Bechara',
  phone: '0411 331 244',
  phoneHref: 'tel:+61411331244',
  email: 'media.eats.central.west@gmail.com',
  region: 'Central West NSW',
  launched: 'January 2026',
  award: '2026 Finalist — Outstanding New Business, Oberon Business Awards',
}
