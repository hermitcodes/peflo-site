/* Peflo Logistics Limited - site script
   Most of the site's text lives in the CONTENT section below. Edit it there. */
(function () {
  "use strict";

  /* ======================= SETTINGS: edit these ======================= */
  var SITE = {
    name: "Peflo Logistics Limited",
    logo: "images/peflobg.jpg",        // path to your logo file
    showNameBesideLogo: true,         // true = show "PEFLO Logistics Limited" next to the logo; false = logo only
    email: "info@peflo.com",
    phone: "+254 000 000 000",
    address: "NAIROBI",
    social: {
      linkedin: "https://www.linkedin.com/",
      facebook: "https://www.facebook.com/",
      x: "https://x.com/",
      instagram: "https://www.instagram.com/",
      whatsapp: "https://wa.me/254000000000"
    }
  };

  /* ======================= CONTENT: edit these ======================= */
  // Services shown on the home page, the Services page and each service page.
  // These are sensible starting points for a construction company. Change them to match what Peflo really does.
  var SERVICES = {
    "building-construction": {
      title: "Building construction", icon: "building",
      short: "New residential and commercial buildings, from foundation to finishes.",
      tag: "New buildings built to the agreed drawings, specification and budget.",
      intro: ["We construct residential and commercial buildings from the first excavation to the final coat of paint.", "Every project starts with a clear scope, a written programme and a named person responsible for the site."],
      glance: ["Residential buildings", "Commercial buildings", "Foundations and structure", "Finishes and fit-out"],
      covers: [["Residential buildings", "Houses, apartments and estates built to the approved design."], ["Commercial buildings", "Offices, shops and mixed-use premises for businesses."], ["Foundations and structure", "Excavation, concrete, masonry and structural frames."], ["Finishes and fit-out", "Plastering, flooring, joinery, painting and services."]],
      steps: [["Review", "We study the drawings, specification and site conditions."], ["Programme", "We agree a build sequence, dates and site responsibilities."], ["Build", "We construct, inspect each stage and report progress."], ["Hand over", "We complete snagging and hand over with documentation."]],
      note: "We work to applicable building codes, permits and safety requirements. Scope, specification and timelines are agreed in writing before work starts.",
      faq: [["Can you build from our own drawings?", "Yes. We price and build from your architect's drawings, and we will flag anything that needs clarification before work starts."], ["Do you handle approvals and permits?", "Tell us what you need. We will explain which approvals apply to your project and what role we can play in obtaining them."]]
    },
    "civil-works": {
      title: "Civil and infrastructure works", icon: "road",
      short: "Site preparation, roads, drainage and external works.",
      tag: "The groundwork and external works that every project depends on.",
      intro: ["Good buildings sit on well-prepared ground. We handle the earthworks, access roads, drainage and external works around them.", "We plan each job around the site's levels, soil and water so the finished work lasts."],
      glance: ["Site clearing and earthworks", "Roads, paving and parking", "Drainage and culverts", "Retaining and boundary walls"],
      covers: [["Site clearing and earthworks", "Clearing, cut and fill, grading and compaction."], ["Roads, paving and parking", "Access roads, driveways, parking areas and paved surfaces."], ["Drainage and culverts", "Storm water drainage built to keep your site dry."], ["Retaining and boundary walls", "Retaining structures, perimeter walls and gates."]],
      steps: [["Survey", "We assess levels, soil and drainage on site."], ["Plan", "We agree the method, equipment and sequence of work."], ["Execute", "We carry out the works and check levels and quality."], ["Complete", "We clear the site and hand over finished works."]],
      note: "Earthworks and drainage can affect neighbours and the environment. We plan the work with that in mind and follow applicable requirements.",
      faq: [["Can you do site work without building on it?", "Yes. We take on stand-alone civil and external works as well as work that supports a building project."], ["How do you deal with drainage problems?", "We study how water moves across the site first, then design and build drainage to suit it."]]
    },
    "renovation": {
      title: "Renovation and refurbishment", icon: "wrench",
      short: "Repairs, extensions and upgrades to existing buildings.",
      tag: "Repairing, extending and upgrading buildings that are already standing.",
      intro: ["Working on an existing building needs care. We assess what is there before we plan what to change.", "We keep disruption low and tell you early if we find something unexpected behind a wall or under a floor."],
      glance: ["Structural repairs", "Extensions", "Interior and exterior upgrades", "Roofing and waterproofing"],
      covers: [["Structural repairs", "Cracks, settlement and damaged structural elements."], ["Extensions", "Extra rooms, floors and wings added to existing buildings."], ["Upgrades", "New finishes, layouts, fittings and services inside and out."], ["Roofing and waterproofing", "Repairs and replacement to stop leaks and damp."]],
      steps: [["Inspect", "We survey the building and record its condition."], ["Propose", "We set out the work, the cost and the programme."], ["Renovate", "We carry out the work in agreed stages."], ["Check", "We inspect, fix snags and hand back the space."]],
      note: "Older buildings can hide problems. Where we find one, we explain it and agree the next step with you before we continue.",
      faq: [["Can we stay in the building during the work?", "Often yes, depending on the work. We plan the stages to keep disruption as low as we can."], ["Do you give a fixed price?", "Where the scope is clear we can. Where it depends on what we find, we explain the uncertainty up front."]]
    },
    "project-management": {
      title: "Project management and supervision", icon: "clipboard",
      short: "Planning, cost control and site supervision for your project.",
      tag: "Someone accountable for your project's time, cost and quality.",
      intro: ["Even a well-designed project goes wrong without good management on site. We plan the work, watch the cost and supervise the people doing it.", "You get regular, plain reports so you always know where the project stands."],
      glance: ["Planning and programming", "Cost control", "Site supervision", "Quality and safety checks"],
      covers: [["Planning and programming", "A realistic programme with clear stages and dates."], ["Cost control", "Budgets, valuations and early warning of cost changes."], ["Site supervision", "Daily oversight of workmanship, materials and subcontractors."], ["Quality and safety checks", "Regular inspections and records at every stage."]],
      steps: [["Scope", "We agree the brief, budget and who decides what."], ["Plan", "We build the programme and reporting routine."], ["Supervise", "We run the site, check the work and manage changes."], ["Close out", "We finish snagging, records and final accounts."]],
      note: "We can manage projects we build ourselves or projects built by other contractors.",
      faq: [["Can you supervise a project another contractor is building?", "Yes. Tell us about the project and we will explain what we can take on."], ["How often will we get progress reports?", "We agree the reporting routine at the start, for example weekly, and keep to it."]]
    },
    "logistics-support": {
      title: "Site logistics and materials supply", icon: "truck",
      short: "Materials, equipment and deliveries organised for your site.",
      tag: "The right materials and equipment on site when the work needs them.",
      intro: ["Construction stops when materials do not arrive. We organise ordering, delivery and storage so work on site keeps moving.", "We coordinate equipment and suppliers around the build programme rather than around what is convenient for the supplier."],
      glance: ["Materials sourcing and delivery", "Equipment coordination", "Site storage and scheduling", "Waste removal"],
      covers: [["Materials sourcing and delivery", "Quotes, orders and scheduled deliveries from reliable suppliers."], ["Equipment coordination", "Plant and tools booked for the days they are needed."], ["Site storage and scheduling", "Safe storage and delivery times that fit the build programme."], ["Waste removal", "Regular clearing of waste and surplus materials."]],
      steps: [["List", "We list the materials and equipment each stage needs."], ["Source", "We get quotes and confirm suppliers and dates."], ["Deliver", "We schedule deliveries and receive them on site."], ["Review", "We check quantities, quality and costs against the plan."]],
      note: "Transport and supply activities may require licences or permits. We work only within the requirements that apply.",
      faq: [["Can you supply materials for a project we are building ourselves?", "Tell us what you need and when. We will say what we can supply and how we would deliver it."], ["Do you own the equipment?", "Ask us about the equipment you need and we will explain how we would provide it."]]
    }
  };
  var ORDER = ["building-construction", "civil-works", "renovation", "project-management", "logistics-support"];

  // Team members. Replace the placeholders. Add "photo": "images/name.jpg" to show a picture.
  var TEAM = [
    { name: "Langat Kipngeno Peter", role: "Chief Executive Officer", bio: "A visionary and results-driven leader with a strong commitment to excellence in the construction industry. The CEO provides strategic direction, builds strong business partnerships, and ensures the company maintains high standards of quality, integrity, and customer satisfaction." },
    { name: "Chepkorir Florah", role: "Project Manager", bio: "A skilled project management professional responsible for planning, coordinating, and overseeing construction projects from start to completion. The Project Manager ensures projects remain on schedule, within budget, and meet the required quality, safety, and client expectations." },
    { name: "Engineer Langat", role: "Site Engineer", bio: "A dedicated construction professional responsible for supervising technical activities on site and ensuring that construction work is carried out according to approved designs, specifications, and safety standards. The Site Engineer works closely with contractors, project teams, and clients to ensure successful project delivery." }
  ];

  // Completed projects. Leave empty to show a friendly message instead.
  // Example: { name: "Project name", meta: "Location, year, type of work", text: "One or two sentences about the project." }
  var PROJECTS = [];

  var WHY = [
    ["shield", "Safety on every site", "Safe working is planned before work starts and checked every day. Nobody should be hurt building something for you."],
    ["ruler", "Quality you can inspect", "We check work at each stage against the drawings and specification, and we show you the results."],
    ["chat", "Plain communication", "You get regular progress reports in clear language, and straight answers when something changes."],
    ["check", "One accountable team", "A named person is responsible for your project from first meeting to handover."]
  ];
  var PROCESS = [
    ["Consult", "We listen to what you need, visit the site and discuss budget and timing."],
    ["Plan", "We agree the scope, price and programme in writing."],
    ["Build", "We build to the plan, inspect each stage and report progress."],
    ["Hand over", "We finish snagging, hand over and stay available after completion."]
  ];
  var HOME_FAQ = [
    ["What kinds of projects do you take on?", "We build and renovate buildings, carry out civil and external works, and manage and supervise construction projects. Tell us about yours and we will say honestly whether it is a good fit."],
    ["How do I get a quote?", "Send us a message with the location, the type of work and when you want to start. We will reply to arrange a site visit and then prepare a written quote."],
    ["Do you work to a written agreement?", "Yes. We agree the scope, price and programme in writing before work starts."],
    ["Can you work from our drawings?", "Yes. We build from your architect's drawings and will raise any questions before work begins."]
  ];

  /* ======================= ICONS ======================= */
  var ICONS = {
    hardhat: '<path d="M6 27h28"/><path d="M9 27c0-7 4-12 11-12s11 5 11 12"/><path d="M17 15.500V11h6v4.500"/>',
    building: '<rect x="8" y="6" width="24" height="28"/><path d="M8 14h24M8 22h24M16 6v8M24 14v8M16 22v12"/>',
    road: '<path d="M15 5 8 35M25 5l7 30M20 8v5M20 18v5M20 28v5"/>',
    wrench: '<path d="M27 6a8 8 0 0 0-9 10.500L6.500 28l5.500 5.500L23.500 22A8 8 0 0 0 34 13l-5 5-4.500-1-1-4.500z"/>',
    clipboard: '<path d="M13 8h14v5H13z"/><path d="M9 10h22v25H9z"/><path d="M14 21h12M14 28h8"/>',
    truck: '<path d="M4 11h20v18H4zM24 17h8l5 6v6H24"/><circle cx="12" cy="31" r="3"/><circle cx="30" cy="31" r="3"/>',
    shield: '<path d="M20 5 7 10v9c0 8 5.500 13.500 13 16 7.500-2.500 13-8 13-16v-9z"/><path d="m14 20 4.500 4.500L27 16"/>',
    ruler: '<path d="M6 28 28 6l6 6L12 34z"/><path d="m12 22 3 3M17 17l3 3M22 12l3 3"/>',
    chat: '<path d="M6 8h28v20H17l-8 6v-6H6z"/><path d="M13 16h14M13 21h9"/>',
    check: '<path d="m9 21 8 8 14-16"/>',
    user: '<circle cx="20" cy="14" r="7"/><path d="M6 35c1-8 7-12 14-12s13 4 14 12"/>',
    mail: '<rect x="5" y="9" width="30" height="22" rx="3"/><path d="m6 12 14 11 14-11"/>',
    phone: '<path d="M11 6h6l3 8-4 3a16 16 0 0 0 7 7l3-4 8 3v6a3 3 0 0 1-3 3C18 32 8 22 8 9a3 3 0 0 1 3-3z"/>',
    pin: '<path d="M20 35s11-9.500 11-18a11 11 0 0 0-22 0c0 8.500 11 18 11 18z"/><circle cx="20" cy="17" r="4"/>',
    up: '<path d="M20 33V8M10 18 20 8l10 10"/>',
    chev: '<path d="M14 8l12 12-12 12"/>',
    linkedin: '<rect x="5" y="5" width="30" height="30" rx="6"/><path d="M13 17.500V28M19 28V17.500M19 22c0-2.800 1.800-4.500 4.300-4.500S27.500 19 27.500 22v6"/><path d="M13 12.500h.01" stroke-width="3.200"/>',
    facebook: '<path d="M23 34V21h4.500l.8-5H23v-3.200c0-1.500.7-2.500 2.600-2.500h2.400V6.800C27.300 6.700 26 6.600 24.600 6.600 20.900 6.600 18.500 8.800 18.500 12.800V16H14v5h4.500v13z"/>',
    x: '<path d="M8 8l24 24M32 8 8 32"/>',
    instagram: '<rect x="6" y="6" width="28" height="28" rx="8"/><circle cx="20" cy="20" r="6.500"/><path d="M28.500 11.500h.01" stroke-width="3"/>',
    whatsapp: '<path d="M20 5.500A14.500 14.500 0 0 0 7.500 27.200L5.500 34.500l7.500-2A14.500 14.500 0 1 0 20 5.500z"/><path d="M14.500 13c-.5 4.500 4 10 10.500 11l2.200-2.200-3.200-2-1.700 1.200a8 8 0 0 1-3.600-3.600l1.200-1.700-2-3.200z"/>'
  };
  function ic(n, cls) { return '<svg class="' + (cls || "ic") + '" viewBox="0 0 40 40" aria-hidden="true" focusable="false">' + (ICONS[n] || "") + "</svg>"; }
  function badge(n) { return '<span class="badge">' + ic(n) + "</span>"; }

  /* ======================= SHARED PARTS ======================= */
  var FALLBACK_MARK = '<svg viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="6" fill="#FFB400"/><path d="M13 31V9h9.500a6.500 6.500 0 0 1 0 13H13" fill="none" stroke="#101820" stroke-width="3.600" stroke-linecap="square" stroke-linejoin="round"/></svg>';
  var MARK = '<img class="logo" src="' + SITE.logo + '" alt="' + SITE.name + ' logo">';
  var NAME_TEXT = SITE.showNameBesideLogo ? "<span><b>PEFLO</b><small>Logistics Limited</small></span>" : "";
  var SOCIAL_NAMES = { linkedin: "LinkedIn", facebook: "Facebook", x: "X", instagram: "Instagram", whatsapp: "WhatsApp" };
  function social(title) {
    var li = Object.keys(SITE.social).map(function (k) {
      return '<li><a href="' + SITE.social[k] + '" target="_blank" rel="noopener noreferrer" aria-label="Peflo on ' + SOCIAL_NAMES[k] + '" title="' + SOCIAL_NAMES[k] + '">' + ic(k) + "</a></li>";
    }).join("");
    return '<div class="social">' + (title ? "<h3>" + title + "</h3>" : "") + "<ul>" + li + "</ul></div>";
  }
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  function cur(files) { return files.indexOf(page) > -1 ? ' aria-current="page"' : ""; }

  function headerHtml() {
    var sub = ORDER.map(function (k) { return '<li><a href="service.html?s=' + k + '">' + SERVICES[k].title + "</a></li>"; }).join("");
    return '<div class="wrap">' +
      '<a class="brand" href="index.html" aria-label="' + SITE.name + ', home">' + MARK + NAME_TEXT + "</a>" +
      '<ul id="menu">' +
      '<li><a href="index.html"' + cur(["index.html", ""]) + ">Home</a></li>" +
      '<li><a href="about.html"' + cur(["about.html"]) + ">About</a></li>" +
      '<li class="has-sub"><a href="services.html"' + cur(["services.html", "service.html"]) + ">Services</a><ul class=\"sub\">" + sub + "</ul></li>" +
      '<li><a href="projects.html"' + cur(["projects.html"]) + ">Projects</a></li>" +
      '<li><a href="contact.html"' + cur(["contact.html"]) + ">Contact</a></li></ul>" +
      '<a class="btn" href="contact.html">Request a quote</a>' +
      '<button class="menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false" aria-controls="menu"><span></span></button></div>';
  }
  function footerHtml() {
    var sv = ORDER.map(function (k) { return '<li><a href="service.html?s=' + k + '">' + SERVICES[k].title + "</a></li>"; }).join("");
    return '<div class="wrap"><div class="fgrid">' +
      '<div><a class="brand" href="index.html">' + MARK + NAME_TEXT + "</a><p>Construction, civil works, renovation and project management.</p></div>" +
      '<div><h4>Company</h4><ul><li><a href="about.html">About us</a></li><li><a href="about.html#team">Our team</a></li><li><a href="projects.html">Projects</a></li><li><a href="contact.html">Contact</a></li></ul></div>' +
      "<div><h4>Services</h4><ul>" + sv + "</ul></div>" +
      '<div><h4>Contact</h4><ul><li><a href="mailto:' + SITE.email + '">' + SITE.email + "</a></li><li>" + SITE.phone + "</li><li>" + SITE.address + "</li></ul><br>" + social("") + "</div></div>" +
      '<div class="legal"><p>&copy; ' + new Date().getFullYear() + " " + SITE.name + ". All rights reserved.</p><p>All work is carried out in line with applicable laws, building codes, permits and safety requirements.</p></div></div>";
  }

  /* ======================= HERO DRAWING ======================= */
  function blueprint() {
    var s = '<svg class="bp" viewBox="0 0 560 470" role="img" aria-label="Animated blueprint of a building going up next to a tower crane">';
    s += '<line class="ground" x1="20" y1="400" x2="540" y2="400"/>';
    var x = 70, w = 250, h = 62, floors = 5, i, k;
    for (i = 0; i < floors; i++) {
      var y = 400 - h * (i + 1), d = (0.5 + i * 0.6).toFixed(2) + "s", top = i === floors - 1;
      s += '<g style="--d:' + d + '">';
      if (!top) {
        s += '<rect class="fl" pathLength="1" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '"/>';
        for (k = 0; k < 4; k++) s += '<rect class="win" x="' + (x + 22 + k * 56) + '" y="' + (y + 16) + '" width="30" height="30"/>';
      } else {
        s += '<rect class="fl open" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" style="fill:none;stroke:#fff;stroke-width:2.2"/>';
        for (k = 0; k < 5; k++) s += '<line class="col" x1="' + (x + k * 62.5) + '" y1="' + y + '" x2="' + (x + k * 62.5) + '" y2="' + (y + h) + '"/>';
      }
      s += "</g>";
    }
    // tower crane
    var mx = 410, y0 = 400, y1 = 60, zz = "", n = 12, step = (y0 - y1) / n;
    for (i = 0; i < n; i++) zz += (i ? "L" : "M") + (i % 2 ? mx - 10 : mx + 10) + " " + (y0 - i * step) + " ";
    s += '<g class="crane"><path d="M' + (mx - 10) + " " + y0 + "V" + y1 + "M" + (mx + 10) + " " + y0 + "V" + y1 + '"/><path d="' + zz + '"/>' +
         '<path d="M' + (mx - 10) + " " + y1 + "H" + (mx + 10) + "L" + mx + ' 24z"/><path d="M230 ' + y1 + "H530M" + mx + " 24L240 " + y1 + "M" + mx + ' 24L520 ' + y1 + '"/>' +
         '<rect x="498" y="64" width="30" height="24"/><path d="M290 ' + (y1 - 6) + "h20v12h-20z\"/></g>";
    s += '<g class="swing"><g class="lift"><g class="crane"><path d="M300 ' + (y1 + 6) + 'V160"/></g><rect class="load" x="262" y="160" width="76" height="12"/><path class="crane" style="opacity:1" d="M270 160l30-20 30 20"/></g></g>';
    // drawing furniture
    s += '<line class="dim" x1="70" y1="428" x2="320" y2="428"/><path class="dim" d="M70 422v12M320 422v12"/>';
    s += '<text class="label" x="195" y="452" text-anchor="middle">Elevation A-A</text>';
    return s + "</svg>";
  }

  /* ======================= RENDERERS ======================= */
  var R = {
    blueprint: blueprint,
    works: function () {
      return '<div class="works">' + ORDER.map(function (k) {
        var o = SERVICES[k];
        return '<a class="work rv" href="service.html?s=' + k + '">' + badge(o.icon) + "<h3>" + o.title + "</h3><p>" + o.short + "</p>" + ic("chev", "chev") + "</a>";
      }).join("") + "</div>";
    },
    reasons: function () {
      return '<div class="reasons">' + WHY.map(function (r) { return '<div class="reason rv">' + badge(r[0]) + "<h3>" + r[1] + "</h3><p>" + r[2] + "</p></div>"; }).join("") + "</div>";
    },
    steps: function () {
      return '<div class="steps rv"><div class="bar"></div>' + PROCESS.map(function (p) { return '<div class="step"><h3>' + p[0] + "</h3><p>" + p[1] + "</p></div>"; }).join("") + "</div>";
    },
    team: function () {
      return '<div class="tgrid">' + TEAM.map(function (m) {
        return '<article class="tcard rv"><div class="avatar">' + (m.photo ? '<img src="' + m.photo + '" alt="' + m.name + '" width="84" height="84">' : ic("user")) + "</div><h3>" + m.name + '</h3><p class="role">' + m.role + "</p><p>" + m.bio + "</p></article>";
      }).join("") + "</div>";
    },
    projects: function () {
      if (!PROJECTS.length) {
        return '<div class="empty"><h3>Our project portfolio is being prepared</h3><p>Tell us about the kind of project you have in mind and we will share relevant past work and references when we reply.</p><a class="btn" href="contact.html">Request a quote</a></div>';
      }
      return '<div class="pgrid">' + PROJECTS.map(function (p) { return '<article class="pcard rv"><h3>' + p.name + '</h3><p class="meta">' + p.meta + "</p><p>" + p.text + "</p></article>"; }).join("") + "</div>";
    },
    faq: function () { return faqHtml(HOME_FAQ); },
    social: function () { return social("Follow us"); }
  };
  function faqHtml(items) {
    return items.map(function (f) { return "<details><summary>" + f[0] + '</summary><div class="ans"><div><p>' + f[1] + "</p></div></div></details>"; }).join("");
  }

  /* ======================= SERVICE PAGE ======================= */
  function servicePage() {
    var root = document.getElementById("service-root");
    if (!root) return;
    var slug = new URLSearchParams(location.search).get("s");
    var s = SERVICES[slug];
    if (!s) { location.replace("services.html"); return; }
    document.title = s.title + " | " + SITE.name;
    var others = ORDER.filter(function (k) { return k !== slug; }).map(function (k) {
      var o = SERVICES[k];
      return '<a class="work rv" href="service.html?s=' + k + '">' + badge(o.icon) + "<h3>" + o.title + "</h3><p>" + o.short + "</p>" + ic("chev", "chev") + "</a>";
    }).join("");
    root.innerHTML =
      '<section class="pagehead"><div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a> / <a href="services.html">Services</a> / ' + s.title + "</nav>" +
      "<h1>" + s.title + '</h1><p class="lead">' + s.tag + '</p><div class="cta"><a class="btn" href="contact.html">Request a quote</a><a class="btn line" href="services.html">All services</a></div></div></section><div class="hazard"></div>' +
      '<section class="section"><div class="wrap two"><div class="prose rv"><h2>Overview</h2>' + s.intro.map(function (p) { return "<p>" + p + "</p>"; }).join("") + "</div>" +
      '<aside class="glance rv"><h3>At a glance</h3><ul>' + s.glance.map(function (g) { return "<li>" + g + "</li>"; }).join("") + "</ul></aside></div></section>" +
      '<section class="section alt"><div class="wrap"><h2>What this covers</h2><div class="cover">' + s.covers.map(function (c) { return "<article>" + badge(s.icon) + "<h3>" + c[0] + "</h3><p>" + c[1] + "</p></article>"; }).join("") + "</div></div></section>" +
      '<section class="section"><div class="wrap"><h2>How it works</h2><div class="steps rv"><div class="bar"></div>' + s.steps.map(function (t) { return '<div class="step"><h3>' + t[0] + "</h3><p>" + t[1] + "</p></div>"; }).join("") + '</div><p class="note" style="margin-top:56px">' + s.note + "</p></div></section>" +
      '<section class="section alt"><div class="wrap"><h2>Questions about this service</h2><div class="faq">' + faqHtml(s.faq) + "</div></div></section>" +
      '<section class="section"><div class="wrap"><h2>Our other services</h2><div class="works">' + others + "</div></div></section>" +
      '<section class="band"><div class="wrap"><div><h2>Tell us about your project</h2><p>Send the location, the type of work and when you want to start. We will reply to arrange a site visit.</p></div><a class="btn" href="contact.html">Request a quote</a></div></section>';
  }

  /* ======================= CONTACT FORM ======================= */
  function contactForm() {
    var form = document.getElementById("form");
    if (!form) return;
    var sel = document.getElementById("topic");
    sel.innerHTML = ORDER.map(function (k) { return "<option>" + SERVICES[k].title + "</option>"; }).join("") + "<option>Something else</option>";
    var status = document.getElementById("status");
    function setErr(id, msg) {
      document.getElementById("e-" + id).textContent = msg;
      document.getElementById(id).setAttribute("aria-invalid", msg ? "true" : "false");
      return !msg;
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var n = document.getElementById("name").value.trim(), m = document.getElementById("email").value.trim(),
          ph = document.getElementById("phone").value.trim(), t = document.getElementById("msg").value.trim();
      var ok = setErr("name", n ? "" : "Enter your full name.");
      ok = setErr("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m) ? "" : "Enter a valid email address.") && ok;
      ok = setErr("msg", t ? "" : "Describe your project in a few lines.") && ok;
      if (!ok) { status.textContent = ""; return; }
      var topic = sel.value;
      var body = "Name: " + n + "\nEmail: " + m + "\nPhone: " + (ph || "not given") + "\nProject type: " + topic + "\n\n" + t;
      window.location.href = "mailto:" + SITE.email + "?subject=" + encodeURIComponent("Quote request: " + topic) + "&body=" + encodeURIComponent(body);
      status.textContent = "Your email app should open with the message ready to send.";
    });
  }

  /* ======================= START UP ======================= */
  document.addEventListener("DOMContentLoaded", function () {
    var h = document.getElementById("site-header"); if (h) h.innerHTML = headerHtml();
    var f = document.getElementById("site-footer"); if (f) f.innerHTML = footerHtml();
    document.querySelectorAll("[data-render]").forEach(function (el) { var fn = R[el.getAttribute("data-render")]; if (fn) el.innerHTML = fn(); });
    document.querySelectorAll("[data-icon]").forEach(function (el) { el.innerHTML = ic(el.getAttribute("data-icon")); });
    document.querySelectorAll("[data-site]").forEach(function (el) { var v = SITE[el.getAttribute("data-site")]; if (v) el.textContent = v; });
    document.querySelectorAll("[data-mail]").forEach(function (el) { el.href = "mailto:" + SITE.email; });
    document.querySelectorAll("[data-tel]").forEach(function (el) { el.href = "tel:" + SITE.phone.replace(/\s/g, ""); });
    // if the logo file is missing, show the simple built-in mark instead
    document.querySelectorAll(".brand .logo").forEach(function (img) {
      function fallback() { img.outerHTML = FALLBACK_MARK; }
      img.addEventListener("error", fallback);
      if (img.complete && img.naturalWidth === 0) fallback();
    });
    servicePage();
    contactForm();

    requestAnimationFrame(function () { document.body.classList.add("loaded"); });

    // header, progress bar, back-to-top
    var header = document.getElementById("site-header"), prog = document.getElementById("progress"), topBtn = document.getElementById("top-btn");
    if (topBtn) { topBtn.innerHTML = ic("up"); topBtn.addEventListener("click", function () { window.scrollTo({ top: 0 }); }); }
    function onScroll() {
      var y = window.scrollY, hh = document.documentElement.scrollHeight - window.innerHeight;
      if (header) header.classList.toggle("solid", y > 40);
      if (prog) prog.style.width = (hh > 0 ? (y / hh) * 100 : 0) + "%";
      if (topBtn) topBtn.classList.toggle("show", y > 700);
    }
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

    // mobile menu
    var btn = document.getElementById("menuBtn"), menu = document.getElementById("menu");
    function closeMenu() { menu.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-label", "Open menu"); }
    btn.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open); btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

    // reveal on scroll (steps line fills when its block appears)
    var els = [].slice.call(document.querySelectorAll(".rv"));
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            var sib = Array.prototype.indexOf.call(e.target.parentNode.children, e.target);
            e.target.style.transitionDelay = Math.min(sib, 4) * 80 + "ms";
            e.target.classList.add("in"); io.unobserve(e.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
      els.forEach(function (el) { io.observe(el); });
    } else { els.forEach(function (el) { el.classList.add("in"); }); }
  });
})();
