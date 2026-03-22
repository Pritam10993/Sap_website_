/* ============================================================
   ALL PAGE DATA
============================================================ */
const PAGES = {

    'about-us':{tag:'Explore Us',parent:'Explore Us',title:'About SAP Platform',desc:'20+ years delivering digital excellence — transforming enterprises across 180+ countries.',body:`
      <div class="dt-section"><div class="stats-row"><div class="stat-box"><h3>440K+</h3><p>Customers</p></div><div class="stat-box"><h3>180+</h3><p>Countries</p></div><div class="stat-box"><h3>20+</h3><p>Years</p></div><div class="stat-box"><h3>€33B+</h3><p>Revenue</p></div></div></div>
      <div class="dt-section"><div class="dt-section-title">Our Story</div><p style="color:var(--muted);font-size:.9rem;line-height:1.8;max-width:800px">Founded with a vision of enabling enterprises to harness intelligent technology, SAP Platform has grown from a regional SAP partner to a globally recognized digital transformation leader. Over two decades, we have helped hundreds of organizations modernize core business processes, migrate to the cloud, and embrace AI-driven operations.</p></div>
      <div class="dt-section"><div class="dt-section-title">What Sets Us Apart</div><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-trophy-fill"></i></div><h5>Deep SAP Expertise</h5><p>Certified SAP partner with the highest tier of expertise across all product lines and industries.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-globe2"></i></div><h5>Global Delivery</h5><p>Onshore, nearshore, and offshore centers ensuring 24/7 support and cost-effective implementations.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-lightbulb-fill"></i></div><h5>Innovation First</h5><p>Proprietary tools like KTern.AI accelerate SAP projects and reduce risk throughout the journey.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>People-Centric</h5><p>Over 5,000 consultants who bring passion and commitment to every client engagement worldwide.</p></div>
      </div></div>`},
  
    'leadership':{tag:'Explore Us',parent:'Explore Us',title:'Leadership',desc:'Visionary leaders shaping SAP Platform into a globally trusted enterprise technology partner.',body:`
      <div class="dt-section"><div class="dt-section-title">Executive Team</div><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-person-circle"></i></div><h5>Chief Executive Officer</h5><p>20+ years in enterprise technology, driving global expansion and Fortune 500 partnerships.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-person-circle"></i></div><h5>Chief Technology Officer</h5><p>Pioneer in SAP S/4HANA cloud migrations, leading our Centre of Excellence and Innovation labs.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-person-circle"></i></div><h5>Chief Operating Officer</h5><p>Operational excellence expert managing global delivery across 180+ countries consistently.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-person-circle"></i></div><h5>Chief Financial Officer</h5><p>Strategic finance leader overseeing investor relations, M&A activity, and sustainable growth.</p></div>
      </div></div>`},
  
    'awards':{tag:'Explore Us',parent:'Explore Us',title:'Awards & Achievements',desc:'Recognition from the world\'s most respected technology analysts and industry bodies.',body:`
      <div class="dt-section"><div class="stats-row"><div class="stat-box"><h3>50+</h3><p>Industry Awards</p></div><div class="stat-box"><h3>15+</h3><p>Analyst Recognitions</p></div><div class="stat-box"><h3>8</h3><p>Consecutive Years</p></div><div class="stat-box"><h3>Top 10</h3><p>SAP Partners Global</p></div></div></div>
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-award-fill"></i></div><h5>SAP Pinnacle Award 2024</h5><p>Recognized as top SAP partner for Cloud ERP implementations in the Asia-Pacific region.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-star-fill"></i></div><h5>Gartner Magic Quadrant</h5><p>Featured as a notable vendor in SAP implementation services for five consecutive years.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-trophy-fill"></i></div><h5>Best Employer 2024</h5><p>Recognized for outstanding employee experience, benefits, and career development programs.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-shield-check-fill"></i></div><h5>ISO 27001 Certified</h5><p>Highest information security management certification demonstrating our commitment to data protection.</p></div>
      </div></div>`},
  
    'commitment':{tag:'Explore Us',parent:'Explore Us',title:'Commitment To People',desc:'Our people are our greatest asset — we invest in growth, wellbeing, and success at every stage.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-heart-fill"></i></div><h5>Wellbeing First</h5><p>Comprehensive health programs, mental wellness support, and flexible working for every employee.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-mortarboard-fill"></i></div><h5>Continuous Learning</h5><p>Annual learning budgets, SAP certification support, and access to 10,000+ online courses.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-graph-up-arrow"></i></div><h5>Career Growth</h5><p>Structured paths, mentorship programs, and internal mobility across global offices.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Inclusive Culture</h5><p>50+ nationalities, active DEI programs, and employee resource groups at every level.</p></div>
      </div></div>
      <div class="dt-section"><div class="stats-row"><div class="stat-box"><h3>94%</h3><p>Employee Satisfaction</p></div><div class="stat-box"><h3>92%</h3><p>Would Recommend</p></div><div class="stat-box"><h3>4.5★</h3><p>Glassdoor Rating</p></div><div class="stat-box"><h3>85%</h3><p>Internal Promotions</p></div></div></div>`},
  
    'clients':{tag:'Explore Us',parent:'Explore Us',title:'How We Work With Clients',desc:'A proven, collaborative engagement model delivering measurable outcomes from day one.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-search"></i></div><h5>1. Discovery</h5><p>Deep-dive workshops to understand your business, challenges, and technology landscape.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-map-fill"></i></div><h5>2. Roadmap</h5><p>Co-create a transformation roadmap with clear milestones, KPIs, and risk strategies.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-rocket-fill"></i></div><h5>3. Agile Delivery</h5><p>Iterative sprint-based delivery ensuring early value realization and stakeholder alignment.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-arrow-repeat"></i></div><h5>4. Optimize</h5><p>Post go-live optimization, hypercare support, and continuous improvement to maximize ROI.</p></div>
      </div></div>
      <div class="dt-section"><div class="stats-row"><div class="stat-box"><h3>98%</h3><p>On-Time Delivery</p></div><div class="stat-box"><h3>96%</h3><p>Client Satisfaction</p></div><div class="stat-box"><h3>40%</h3><p>Cost Reduction</p></div><div class="stat-box"><h3>3x</h3><p>Faster Time-to-Value</p></div></div></div>`},
  
    'investors':{tag:'Explore Us',parent:'Explore Us',title:'Investor Relations',desc:'Transparent financial performance, strategic growth plans, and governance for our investors.',body:`
      <div class="dt-section"><div class="stats-row"><div class="stat-box"><h3>€33B+</h3><p>Annual Revenue</p></div><div class="stat-box"><h3>28%</h3><p>YoY Growth</p></div><div class="stat-box"><h3>35%</h3><p>EBITDA Margin</p></div><div class="stat-box"><h3>AA</h3><p>Credit Rating</p></div></div></div>
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-graph-up-arrow"></i></div><h5>Consistent Growth</h5><p>20+ consecutive quarters of double-digit revenue growth driven by cloud adoption globally.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-cloud-fill"></i></div><h5>Cloud-First Strategy</h5><p>75% of new bookings are cloud-based, driving predictable recurring revenue streams.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-globe2"></i></div><h5>Market Expansion</h5><p>Active expansion into high-growth markets in Southeast Asia, Middle East, and Latin America.</p></div>
      </div></div>`},
  
    'analyst':{tag:'Explore Us',parent:'Explore Us',title:'Analyst Recognitions',desc:'Top-tier recognition from Gartner, Forrester, IDC, and other leading analyst firms.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-bar-chart-fill"></i></div><h5>Gartner Magic Quadrant</h5><p>Positioned as a Visionary in the 2024 Gartner Magic Quadrant for SAP Implementation Services.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-lightning-fill"></i></div><h5>Forrester Wave</h5><p>Recognized as a Strong Performer in The Forrester Wave for SAP Services Providers 2024.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-patch-check-fill"></i></div><h5>IDC MarketScape</h5><p>Named a Major Player in the IDC MarketScape for Worldwide SAP Implementation Services.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-star-fill"></i></div><h5>ISG Provider Lens</h5><p>Leader designation in ISG Provider Lens SAP Ecosystem Partners 2024 for APAC region.</p></div>
      </div></div>`},
  
    'eos':{tag:'Enterprise Application',parent:'Services',title:'EOS Transformation',desc:'End-to-end Enterprise Operations Suite transformation modernizing your legacy SAP environment.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-diagram-3-fill"></i></div><h5>Current State Analysis</h5><p>Deep assessment of existing SAP ECC or R/3 landscapes to identify transformation opportunities.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-map-fill"></i></div><h5>Transformation Blueprint</h5><p>Migration path from legacy systems to SAP S/4HANA with business case and TCO analysis.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-rocket-fill"></i></div><h5>Phased Execution</h5><p>Risk-managed, phased approach ensuring business continuity throughout the migration.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-graph-up-arrow"></i></div><h5>Value Realization</h5><p>Continuous measurement of business outcomes against defined KPIs to ensure maximum ROI.</p></div>
      </div></div>`},
  
    's4hana':{tag:'Enterprise Application',parent:'Services',title:'SAP S/4HANA',desc:'The intelligent ERP suite — real-time analytics, AI automation, and cloud-native architecture.',body:`
      <div class="dt-section"><div class="stats-row"><div class="stat-box"><h3>60%</h3><p>Faster Close</p></div><div class="stat-box"><h3>40%</h3><p>IT Cost Reduction</p></div><div class="stat-box"><h3>3x</h3><p>Faster Reporting</p></div><div class="stat-box"><h3>99.9%</h3><p>Uptime SLA</p></div></div></div>
      <div class="dt-section"><div class="dt-section-title">Core Capabilities</div><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-bar-chart-line-fill"></i></div><h5>Finance & Accounting</h5><p>Universal journal, real-time reporting, automated period-end close, and predictive accounting.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-gear-fill"></i></div><h5>Manufacturing</h5><p>Production planning, shop floor execution, quality management, and IoT-connected operations.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-truck-front-fill"></i></div><h5>Supply Chain</h5><p>End-to-end visibility, demand sensing, inventory optimization, and logistics coordination.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-person-badge-fill"></i></div><h5>Human Capital</h5><p>Core HR, payroll, and time management fully integrated with all business processes.</p></div>
      </div></div>`},
  
    'rise-sap':{tag:'Enterprise Application',parent:'Services',title:'RISE with SAP',desc:'Your complete cloud ERP as a service — everything you need to become an intelligent enterprise.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-cloud-check-fill"></i></div><h5>SAP S/4HANA Cloud</h5><p>Private or public edition cloud ERP fully managed by SAP with 99.9% uptime guaranteed.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-cpu-fill"></i></div><h5>Business Technology Platform</h5><p>Integration, extension, analytics, and AI capabilities to connect your intelligent enterprise.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-tools"></i></div><h5>Tools & Services</h5><p>SAP Signavio, LeanIX, and automated migration tools to accelerate your transformation.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-headset"></i></div><h5>Premium Support</h5><p>SAP Enterprise Support with 24/7 access to SAP experts and proactive guidance included.</p></div>
      </div></div>`},
  
    'grow-sap':{tag:'Enterprise Application',parent:'Services',title:'GROW with SAP',desc:'Fast, affordable SAP S/4HANA Cloud for mid-market companies — go live in weeks, not years.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-speedometer2"></i></div><h5>Rapid Deployment</h5><p>Pre-configured best practices enable go-live in as little as 8 weeks with minimal risk.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-currency-dollar"></i></div><h5>Affordable Subscription</h5><p>Predictable monthly pricing with no hidden costs — finance it as an operational expense.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-arrow-up-circle-fill"></i></div><h5>Scalable Platform</h5><p>Start with what you need and expand as your business grows without re-implementation.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-cloud-check-fill"></i></div><h5>Always Current</h5><p>Continuous cloud updates ensure you always run the latest SAP S/4HANA innovations available.</p></div>
      </div></div>`},
  
    'ams':{tag:'Enterprise Application',parent:'Services',title:'Application Management Services',desc:'Keep your SAP landscape at peak performance with 24/7 managed services and proactive support.',body:`
      <div class="dt-section"><div class="stats-row"><div class="stat-box"><h3>24/7</h3><p>Support Coverage</p></div><div class="stat-box"><h3>99.9%</h3><p>System Uptime</p></div><div class="stat-box"><h3>4hr</h3><p>Avg Response</p></div><div class="stat-box"><h3>95%</h3><p>First-Call Resolution</p></div></div></div>
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-headset"></i></div><h5>Incident Management</h5><p>24/7 incident logging, prioritization, and resolution with defined SLAs for all severity levels.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-graph-up-arrow"></i></div><h5>Proactive Monitoring</h5><p>AI-powered monitoring identifying and resolving issues before they impact operations.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-arrow-up-circle-fill"></i></div><h5>Continuous Enhancement</h5><p>Regular optimizations, security patches, and enhancements to maximize your SAP investment.</p></div>
      </div></div>`},
  
    'cloud-trans':{tag:'Digital Services',parent:'Services',title:'Cloud Transformation',desc:'Accelerate your journey to the cloud with a structured, risk-managed migration strategy.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-search"></i></div><h5>Cloud Readiness Assessment</h5><p>Evaluate infrastructure, applications, and data to build the optimal cloud migration roadmap.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-arrow-right-circle-fill"></i></div><h5>Lift & Shift Migration</h5><p>Move existing workloads to cloud with minimal changes for fast time-to-value realization.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-wrench-adjustable-fill"></i></div><h5>Re-platforming</h5><p>Optimize applications for cloud-native capabilities while maintaining core business logic.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-building-fill"></i></div><h5>Cloud-Native Build</h5><p>Build new applications using microservices, containers, and serverless architecture.</p></div>
      </div></div>`},
  
    'btp':{tag:'Digital Services',parent:'Services',title:'Business Technology Platform',desc:'Unified platform for integration, data management, analytics, AI, and application development.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-plug-fill"></i></div><h5>Integration Suite</h5><p>Connect SAP and third-party applications with pre-built integrations, APIs, and event-driven architecture.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-database-fill"></i></div><h5>Data & Analytics</h5><p>SAP Analytics Cloud, Datasphere, and HANA Cloud for unified data management and BI.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-robot"></i></div><h5>AI & Automation</h5><p>Embedded AI services, intelligent document extraction, and RPA capabilities built-in.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-code-slash"></i></div><h5>Application Development</h5><p>Low-code/no-code tools, SAP Build apps, and pro-code development on Cloud Foundry.</p></div>
      </div></div>`},
  
    'spend-mgmt':{tag:'Digital Services',parent:'Services',title:'Spend Management',desc:'Complete visibility and control over all enterprise spending with intelligent SAP Ariba solutions.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-pie-chart-fill"></i></div><h5>Spend Visibility</h5><p>360° view of all enterprise spending across categories, suppliers, and business units in real time.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Supplier Network</h5><p>Access to the world's largest B2B network with 6M+ suppliers for better sourcing.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-currency-dollar"></i></div><h5>Cost Reduction</h5><p>AI-powered spend analysis identifying average savings of 8–12% across all categories.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-shield-check-fill"></i></div><h5>Compliance Control</h5><p>Policy enforcement, approval workflows, and audit-ready reporting for full governance.</p></div>
      </div></div>`},
  
    'data-eng':{tag:'Digiverz',parent:'Services',title:'Data Engineering & Science',desc:'Transform raw data into actionable intelligence with end-to-end data engineering and analytics.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-database-fill"></i></div><h5>Data Architecture</h5><p>Scalable data lakes, warehouses, and real-time streaming architectures on any cloud platform.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-robot"></i></div><h5>Machine Learning</h5><p>Custom ML model development, MLOps pipelines, and AI integration with SAP systems.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-bar-chart-fill"></i></div><h5>Advanced Analytics</h5><p>Predictive modeling, statistical analysis, and prescriptive analytics for smarter decisions.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-diagram-3-fill"></i></div><h5>Data Governance</h5><p>Master data management, data quality frameworks, and lineage tracking for trusted data.</p></div>
      </div></div>`},
  
    'product-eng':{tag:'Digiverz',parent:'Services',title:'Product Engineering',desc:'Build world-class digital products with our full-stack engineering team and agile methodology.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-phone-fill"></i></div><h5>Mobile Development</h5><p>Native iOS/Android and cross-platform apps tightly integrated with SAP backends.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-code-slash"></i></div><h5>Web Applications</h5><p>Modern React, Angular, and Vue.js applications with SAP Fiori UX principles.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-gear-fill"></i></div><h5>API & Microservices</h5><p>RESTful APIs, GraphQL, and microservices architecture for scalable SAP extensions.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-shield-check-fill"></i></div><h5>DevSecOps</h5><p>Automated CI/CD pipelines, security scanning, and quality gates for reliable delivery.</p></div>
      </div></div>`},
  
    'cloud-eng':{tag:'Digiverz',parent:'Services',title:'Cloud Engineering',desc:'Architect, build, and operate enterprise-grade cloud infrastructure for SAP workloads.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-cloud-fill"></i></div><h5>Infrastructure as Code</h5><p>Terraform and Bicep templates for automated, repeatable SAP infrastructure provisioning.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-shield-check-fill"></i></div><h5>Cloud Security</h5><p>Zero-trust architecture, identity management, and security posture management.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-speedometer2"></i></div><h5>FinOps & Optimization</h5><p>Continuous cost optimization, right-sizing recommendations, and capacity management.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-arrow-repeat"></i></div><h5>Site Reliability</h5><p>SRE practices, automated incident response, and chaos engineering for platform resilience.</p></div>
      </div></div>`},
  
    'bpm':{tag:'Digiverz',parent:'Services',title:'Business Process Management',desc:'Discover, analyze, and optimize your business processes for maximum efficiency and automation.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-diagram-3-fill"></i></div><h5>Process Discovery</h5><p>SAP Signavio-powered process mining to automatically discover and visualize real processes.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-robot"></i></div><h5>Intelligent Automation</h5><p>RPA, workflow automation, and AI-driven optimization to eliminate manual repetitive tasks.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-bar-chart-fill"></i></div><h5>Process Analytics</h5><p>Continuous monitoring, KPI tracking, and conformance checking to sustain improvements.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-pencil-fill"></i></div><h5>Process Design</h5><p>Collaborative modeling, simulation, and documentation for new or redesigned processes.</p></div>
      </div></div>`},
  
    'cx-trans':{tag:'Performance Services',parent:'Services',title:'CX Transformation',desc:'Reimagine every customer touchpoint with SAP\'s integrated customer experience suite.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-megaphone-fill"></i></div><h5>Marketing Automation</h5><p>Personalized campaigns, customer segmentation, and omnichannel marketing at scale.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-graph-up-arrow"></i></div><h5>Sales Enablement</h5><p>AI-driven opportunity management, configure-price-quote, and revenue forecasting.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-chat-dots-fill"></i></div><h5>Service Excellence</h5><p>Omnichannel service desk, field service management, and customer self-service portals.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-person-heart"></i></div><h5>Loyalty Management</h5><p>Real-time loyalty programs, personalized offers, and lifetime value optimization.</p></div>
      </div></div>`},
  
    'hr-trans':{tag:'Performance Services',parent:'Services',title:'HR Transformation',desc:'Build a future-ready workforce with SAP SuccessFactors — from hire to retire.',body:`
      <div class="dt-section"><div class="stats-row"><div class="stat-box"><h3>30%</h3><p>Hiring Reduction</p></div><div class="stat-box"><h3>25%</h3><p>HR Cost Savings</p></div><div class="stat-box"><h3>40%</h3><p>Employee Engagement</p></div><div class="stat-box"><h3>99%</h3><p>Payroll Accuracy</p></div></div></div>
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-person-check-fill"></i></div><h5>Talent Acquisition</h5><p>AI-powered recruiting, intelligent candidate matching, and seamless onboarding.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-star-fill"></i></div><h5>Performance Management</h5><p>Continuous feedback, goal alignment, and compensation management driving high performance.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-currency-dollar"></i></div><h5>Payroll & Benefits</h5><p>Global payroll across 50+ countries, benefits enrollment, and time management.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-mortarboard-fill"></i></div><h5>Learning & Development</h5><p>Personalized learning paths, skill gap analysis, and career development planning.</p></div>
      </div></div>`},
  
    'ehs':{tag:'Performance Services',parent:'Services',title:'Environment, Health & Safety',desc:'Protect your people, environment, and business with integrated EHS management.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-shield-check-fill"></i></div><h5>Incident Management</h5><p>Streamlined incident reporting, root cause analysis, and corrective action tracking.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-leaf-fill"></i></div><h5>Environmental Compliance</h5><p>Emissions tracking, waste management, and environmental reporting aligned with global regulations.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-clipboard-check-fill"></i></div><h5>Risk Assessment</h5><p>Systematic hazard identification, risk evaluation, and control measure management.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-bar-chart-fill"></i></div><h5>EHS Analytics</h5><p>Real-time dashboards and predictive analytics to drive proactive safety improvements.</p></div>
      </div></div>`},
  
    'ocm':{tag:'Performance Services',parent:'Services',title:'Organizational Change Management',desc:'Accelerate adoption and maximize ROI through people-centric SAP change management.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Stakeholder Engagement</h5><p>Structured stakeholder analysis, communication planning, and executive sponsorship alignment.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-mortarboard-fill"></i></div><h5>Training & Enablement</h5><p>Role-based training programs, e-learning content, and super-user networks for rapid adoption.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-graph-up-arrow"></i></div><h5>Adoption Measurement</h5><p>Usage analytics, adoption KPIs, and feedback mechanisms to track change progress.</p></div>
      </div></div>`},
  
    'biz-analytics':{tag:'Business Platforms',parent:'Services',title:'Business Analytics',desc:'Turn data into decisions with SAP Analytics Cloud — planning, BI, and predictive analytics unified.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-bar-chart-fill"></i></div><h5>Business Intelligence</h5><p>Self-service BI, interactive dashboards, and pixel-perfect reports connecting to any data source.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-calendar-check-fill"></i></div><h5>Planning & Budgeting</h5><p>Driver-based financial planning, rolling forecasts, and collaborative budgeting in one tool.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-graph-up-arrow"></i></div><h5>Predictive Analytics</h5><p>Built-in ML algorithms and smart predict features for forecasting and anomaly detection.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-phone-fill"></i></div><h5>Mobile Analytics</h5><p>Native mobile apps providing real-time insights anywhere, anytime, on any device.</p></div>
      </div></div>`},
  
    'dcp':{tag:'Business Platforms',parent:'Services',title:'Digital Customer Platforms',desc:'Build exceptional digital commerce and customer engagement on scalable modern platforms.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-cart-fill"></i></div><h5>B2B Commerce</h5><p>SAP Commerce Cloud for complex B2B scenarios — catalog management, pricing, and self-service.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-shop-window"></i></div><h5>B2C Commerce</h5><p>High-performance storefronts with AI-driven personalization and seamless checkout optimization.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-person-heart"></i></div><h5>Customer Data Platform</h5><p>Unified customer profiles, real-time segmentation, and AI-powered next-best-action recommendations.</p></div>
      </div></div>`},
  
    'liferay':{tag:'Business Platforms',parent:'Services',title:'Liferay',desc:'Build powerful enterprise portals and digital experience platforms with SAP-integrated Liferay.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-window-fill"></i></div><h5>Enterprise Portals</h5><p>Employee, supplier, and customer portals built on Liferay DXP with deep SAP integration.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-phone-fill"></i></div><h5>Mobile-First Design</h5><p>Responsive progressive web apps delivering seamless experiences across all devices.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-plug-fill"></i></div><h5>SAP Integration</h5><p>Pre-built connectors for SAP S/4HANA, SuccessFactors, and BTP enabling real-time data surfacing.</p></div>
      </div></div>`},
  
    'supply-chain':{tag:'Operations Services',parent:'Services',title:'Supply Chain Transformation',desc:'Build a resilient, intelligent supply chain that adapts to disruption and drives competitive advantage.',body:`
      <div class="dt-section"><div class="stats-row"><div class="stat-box"><h3>35%</h3><p>Inventory Reduction</p></div><div class="stat-box"><h3>25%</h3><p>Cost Savings</p></div><div class="stat-box"><h3>99%</h3><p>Order Accuracy</p></div><div class="stat-box"><h3>2x</h3><p>Velocity</p></div></div></div>
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-graph-up"></i></div><h5>Demand Planning</h5><p>AI-powered forecasting reducing inventory waste while ensuring product availability.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-box-fill"></i></div><h5>Inventory Optimization</h5><p>Multi-echelon management reducing carrying costs while improving service levels.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-truck-front-fill"></i></div><h5>Logistics Management</h5><p>Transportation planning, carrier management, and last-mile delivery optimization.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Supplier Collaboration</h5><p>Digital portal for real-time communication, order management, and performance tracking.</p></div>
      </div></div>`},
  
    'procurement':{tag:'Operations Services',parent:'Services',title:'Procurement Transformation',desc:'Digitize and optimize your entire source-to-pay process for maximum efficiency and spend control.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-search"></i></div><h5>Strategic Sourcing</h5><p>AI-driven spend analysis, supplier discovery, and competitive bidding to optimize costs.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-file-text-fill"></i></div><h5>Contract Management</h5><p>Centralized repository with automated alerts, compliance tracking, and renewal management.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-receipt-cutoff"></i></div><h5>Invoice Automation</h5><p>AI-powered processing reducing manual effort by 90% and accelerating payment cycles.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-shield-check-fill"></i></div><h5>Supplier Risk</h5><p>Real-time risk scoring, ESG compliance monitoring, and automated risk mitigation workflows.</p></div>
      </div></div>`},
  
    'finance-trans':{tag:'Operations Services',parent:'Services',title:'Finance Transformation',desc:'Modernize your finance function with automated processes, real-time insights, and predictive planning.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-calculator-fill"></i></div><h5>Record-to-Report</h5><p>Automated journal entries, intercompany reconciliation, and financial close acceleration.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-receipt-cutoff"></i></div><h5>Order-to-Cash</h5><p>Intelligent billing, credit management, collections automation, and cash application.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-bar-chart-fill"></i></div><h5>FP&A Modernization</h5><p>Driver-based planning, rolling forecasts, and scenario modeling with SAP Analytics Cloud.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-shield-check-fill"></i></div><h5>Compliance & Controls</h5><p>Automated SOX controls, audit trail management, and regulatory reporting across 50+ jurisdictions.</p></div>
      </div></div>`},
  
    'ktern':{tag:'Innovation',parent:'Innovation',title:'KTern.AI',desc:'The only AI-native platform purpose-built to accelerate, de-risk, and govern SAP digital transformations.',body:`
      <div class="dt-section"><div class="stats-row"><div class="stat-box"><h3>60%</h3><p>Faster Projects</p></div><div class="stat-box"><h3>40%</h3><p>Cost Reduction</p></div><div class="stat-box"><h3>95%</h3><p>Risk Reduction</p></div><div class="stat-box"><h3>300+</h3><p>Clients</p></div></div></div>
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-cpu-fill"></i></div><h5>Digital Maps</h5><p>AI-powered SAP landscape discovery, process analysis, and transformation roadmap generation.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-robot"></i></div><h5>Digital Labs</h5><p>Automated test case generation, execution, and defect tracking for zero-defect SAP go-lives.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Digital Projects</h5><p>AI-driven project governance, resource management, and stakeholder collaboration in real time.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-bar-chart-fill"></i></div><h5>Digital Operations</h5><p>Proactive AMS, system health monitoring, and business process performance management.</p></div>
      </div></div>`},
  
    'kebs':{tag:'Innovation',parent:'Innovation',title:'KEBS',desc:'A unified business management platform integrating all key departments for operational efficiency.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-person-badge-fill"></i></div><h5>Resource Management</h5><p>Plan, allocate, and optimize your workforce across projects, skills, and geographies in real time.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-graph-up-arrow"></i></div><h5>Finance & Billing</h5><p>Automated invoicing, revenue recognition, expense management, and financial reporting.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-kanban-fill"></i></div><h5>Project Management</h5><p>Gantt charts, task boards, milestone tracking, and client portal for project delivery.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-headset"></i></div><h5>Service Desk</h5><p>Ticketing, SLA management, knowledge base, and customer satisfaction tracking natively.</p></div>
      </div></div>`},
  
    'technologies':{tag:'Innovation',parent:'Innovation',title:'Technologies',desc:'Authorized reseller and strategic partner for the world\'s leading enterprise technology platforms.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-cloud-fill"></i></div><h5>Microsoft Azure</h5><p>Gold Microsoft partner for Azure infrastructure, SAP on Azure, and Microsoft 365 integrations.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-google"></i></div><h5>Google Cloud</h5><p>Certified GCP partner for SAP on Google Cloud deployments and data analytics integrations.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-box-fill"></i></div><h5>AWS</h5><p>AWS Advanced Partner for SAP on AWS implementations, cloud migrations, and managed services.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-diagram-3-fill"></i></div><h5>ServiceNow</h5><p>ServiceNow Technology Partner enabling SAP-ServiceNow integration for unified IT operations.</p></div>
      </div></div>`},
  
    'high-tech':{tag:'Discrete',parent:'Industries',title:'High Tech',desc:'Power your high-tech business with SAP for rapid innovation, complex supply chains, and global operations.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-cpu-fill"></i></div><h5>Product Lifecycle</h5><p>End-to-end PLM integration connecting engineering, manufacturing, and after-sales service.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-diagram-3-fill"></i></div><h5>Supply Chain Agility</h5><p>Multi-tier visibility for semiconductor, electronics, and software product companies.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-globe2"></i></div><h5>Global Trade</h5><p>Trade compliance, customs management, and global trade automation for complex operations.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-robot"></i></div><h5>R&D Innovation</h5><p>SAP PLM and innovation management tools accelerating new product development time-to-market.</p></div>
      </div></div>`},
  
    'ind-mfg':{tag:'Discrete',parent:'Industries',title:'Industrial Manufacturing',desc:'Digitize your shop floor, optimize production, and deliver mass customization with smart manufacturing.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-gear-wide-connected"></i></div><h5>Smart Manufacturing</h5><p>IoT-connected shop floor, digital twin, and AI-driven production optimization for Industry 4.0.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-clipboard-check-fill"></i></div><h5>Quality Management</h5><p>Inline quality inspection, statistical process control, and defect management.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-wrench-adjustable-fill"></i></div><h5>Asset Performance</h5><p>Predictive maintenance, OEE optimization, and lifecycle management reducing downtime by 35%.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-diagram-3-fill"></i></div><h5>Production Planning</h5><p>Advanced planning and scheduling with real-time capacity constraints and MRP.</p></div>
      </div></div>`},
  
    'aerospace':{tag:'Discrete',parent:'Industries',title:'Aerospace & Defense',desc:'Meet complex defense requirements and maintain airworthiness with SAP enterprise solutions.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-airplane-fill"></i></div><h5>MRO Management</h5><p>Maintenance, repair, and overhaul with full traceability and airworthiness compliance.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-diagram-3-fill"></i></div><h5>Program Management</h5><p>Multi-year program governance, earned value management, and milestone tracking.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-shield-fill"></i></div><h5>Defense Compliance</h5><p>ITAR, EAR, DFARS, and AS9100 frameworks embedded throughout the enterprise platform.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-box-fill"></i></div><h5>Supply Chain Visibility</h5><p>End-to-end visibility with serialized parts tracking and supplier quality management.</p></div>
      </div></div>`},
  
    'automotive':{tag:'Discrete',parent:'Industries',title:'Automotive',desc:'Drive transformation across the entire automotive value chain with intelligent SAP solutions.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-lightning-charge-fill"></i></div><h5>EV Transformation</h5><p>Support the transition to electric vehicles with battery management and new business models.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-diagram-3-fill"></i></div><h5>Supply Chain</h5><p>Just-in-time, just-in-sequence supply chain management for complex automotive assembly.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-tools"></i></div><h5>Dealer Management</h5><p>Integrated systems connecting manufacturer, dealer network, and end customers seamlessly.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-gear-fill"></i></div><h5>Manufacturing Excellence</h5><p>Smart factory solutions enabling mass customization for modern automotive plants worldwide.</p></div>
      </div></div>`},
  
    'consumer-prod':{tag:'Consumer',parent:'Industries',title:'Consumer Products',desc:'Accelerate growth, improve margins, and win at the shelf with SAP consumer products solutions.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-box-fill"></i></div><h5>Trade Promotion Management</h5><p>Plan, execute, and settle trade promotions with full visibility into spending and ROI by retailer.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-shop-window"></i></div><h5>Direct-to-Consumer</h5><p>Omnichannel commerce enabling consumer goods companies to sell directly to end consumers.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-diagram-3-fill"></i></div><h5>Supply Chain</h5><p>Demand-driven management handling seasonal peaks, promotions, and new product launches.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-leaf-fill"></i></div><h5>Sustainability</h5><p>Product carbon footprint tracking, sustainable packaging, and ESG reporting capabilities.</p></div>
      </div></div>`},
  
    'wholesale':{tag:'Consumer',parent:'Industries',title:'Wholesale Distribution',desc:'Optimize distribution operations with real-time inventory, pricing, and order management.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-building-fill"></i></div><h5>Warehouse Management</h5><p>Advanced warehouse operations with pick-pack-ship optimization and real-time inventory accuracy.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-truck-front-fill"></i></div><h5>Transportation Management</h5><p>Multi-carrier freight management, route optimization, and real-time shipment tracking.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-currency-dollar"></i></div><h5>Pricing & Contracts</h5><p>Complex customer-specific pricing, contract management, and rebate processing automation.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-graph-up-arrow"></i></div><h5>Sales Analytics</h5><p>Real-time sales performance, customer profitability, and product margin analysis.</p></div>
      </div></div>`},
  
    'life-science':{tag:'Consumer',parent:'Industries',title:'Life Science',desc:'Accelerate drug development, ensure compliance, and optimize operations with SAP life science solutions.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-capsule-pill"></i></div><h5>Clinical Trial Management</h5><p>Integrated clinical operations, patient data management, and regulatory submission support.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-shield-check-fill"></i></div><h5>GxP Compliance</h5><p>GMP, GLP, and GCP compliance management with full audit trails and electronic batch records.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-diagram-3-fill"></i></div><h5>Supply Chain</h5><p>Cold chain management, serialization, track-and-trace, and anti-counterfeiting capabilities.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-bar-chart-fill"></i></div><h5>Commercial Excellence</h5><p>Multi-channel sales, patient services, and key account management for pharma operations.</p></div>
      </div></div>`},
  
    'retail':{tag:'Consumer',parent:'Industries',title:'Retail',desc:'Deliver personalized shopping experiences, optimize inventory, and run unified commerce operations.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-shop-window"></i></div><h5>Unified Commerce</h5><p>Seamlessly connect in-store, online, and mobile channels for a consistent customer experience.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-box-fill"></i></div><h5>Inventory Management</h5><p>Real-time inventory visibility across all locations reducing stockouts and overstock.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-person-heart"></i></div><h5>Customer Loyalty</h5><p>AI-powered personalization, loyalty program management, and targeted marketing execution.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-truck-front-fill"></i></div><h5>Last-Mile Delivery</h5><p>Intelligent fulfillment, carrier management, and delivery experience optimization at scale.</p></div>
      </div></div>`},
  
    'chemicals':{tag:'Energy & Natural Resources',parent:'Industries',title:'Chemicals',desc:'Optimize chemical manufacturing, ensure safety, and drive sustainability with SAP.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-flask-fill"></i></div><h5>Recipe Management</h5><p>Formula and recipe management for batch manufacturing with quality control built-in.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-shield-check-fill"></i></div><h5>EHS & Compliance</h5><p>Hazardous substance management, REACH compliance, and safety data sheet automation.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-leaf-fill"></i></div><h5>Sustainability</h5><p>Carbon footprint tracking, energy management, and circular economy capabilities.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-diagram-3-fill"></i></div><h5>Supply Chain</h5><p>Bulk chemical logistics, tank management, and specialized supply chain operations.</p></div>
      </div></div>`},
  
    'oil-gas':{tag:'Energy & Natural Resources',parent:'Industries',title:'Oil, Gas & Energy',desc:'Optimize upstream, midstream, and downstream operations with intelligent enterprise solutions.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-fuel-pump-fill"></i></div><h5>Asset Management</h5><p>Predictive maintenance, asset lifecycle, and IoT-connected operations for energy infrastructure.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-leaf-fill"></i></div><h5>Sustainability & ESG</h5><p>Carbon tracking, emissions reporting, and sustainability performance management.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-graph-up-arrow"></i></div><h5>Trading & Risk</h5><p>Commodity trading, price risk management, and regulatory reporting for energy operations.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Field Service</h5><p>Mobile workforce management, remote diagnostics, and intelligent scheduling for field teams.</p></div>
      </div></div>`},
  
    'mill':{tag:'Energy & Natural Resources',parent:'Industries',title:'Mill Products',desc:'Drive efficiency in steel, aluminum, paper, and building materials manufacturing with SAP.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-gear-fill"></i></div><h5>Production Optimization</h5><p>Coil/slab tracking, heat management, and production scheduling for complex mill environments.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-clipboard-check-fill"></i></div><h5>Quality Management</h5><p>Material test reporting, quality certificates, and statistical process control for mill products.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-truck-front-fill"></i></div><h5>Sales & Distribution</h5><p>Complex pricing, tolerance management, and multi-unit of measure handling for sales.</p></div>
      </div></div>`},
  
    'utilities':{tag:'Energy & Natural Resources',parent:'Industries',title:'Utilities',desc:'Transform utility operations, improve customer experience, and accelerate the energy transition.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-lightning-charge-fill"></i></div><h5>Grid Management</h5><p>Smart grid operations, outage management, and distributed energy resource management.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-person-fill"></i></div><h5>Customer Experience</h5><p>Omnichannel customer service, self-service portals, and proactive communication for customers.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-leaf-fill"></i></div><h5>Energy Transition</h5><p>Renewable energy management, carbon accounting, and sustainability reporting capabilities.</p></div>
      </div></div>`},
  
    'healthcare':{tag:'Public Services',parent:'Industries',title:'Healthcare',desc:'Transform patient care, optimize clinical operations, and ensure compliance with SAP solutions.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-heart-pulse-fill"></i></div><h5>Patient Management</h5><p>End-to-end patient journey from admission to discharge with real-time clinical insights.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-capsule-pill"></i></div><h5>Supply Chain</h5><p>Medical supply management, pharmaceutical tracking, and intelligent procurement.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-file-medical-fill"></i></div><h5>Clinical Compliance</h5><p>HIPAA, HL7 FHIR, and local healthcare regulatory compliance built into every solution.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-bar-chart-fill"></i></div><h5>Healthcare Analytics</h5><p>Predictive analytics for patient outcomes, resource utilization, and operational performance.</p></div>
      </div></div>`},
  
    'higher-edu':{tag:'Public Services',parent:'Industries',title:'Higher Education',desc:'Modernize campus operations, improve student experience, and optimize resources with SAP.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-mortarboard-fill"></i></div><h5>Student Lifecycle</h5><p>Admissions, enrollment, academic records, and alumni management on a unified platform.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-building-fill"></i></div><h5>Campus Management</h5><p>Facilities management, space optimization, and energy management for modern campuses.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-currency-dollar"></i></div><h5>Finance & Grants</h5><p>Research grant management, fund accounting, and compliance reporting for institutions.</p></div>
      </div></div>`},
  
    'govt':{tag:'Public Services',parent:'Industries',title:'Federal & National Government',desc:'Modernize government operations, improve citizen services, and ensure compliance with SAP.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-building-fill"></i></div><h5>Grants Management</h5><p>End-to-end grants lifecycle from application to disbursement with full audit trails.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Citizen Services</h5><p>Digital citizen portals, case management, and service delivery optimization for agencies.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-shield-check-fill"></i></div><h5>Compliance & Audit</h5><p>Government accounting standards, audit management, and regulatory reporting built-in.</p></div>
      </div></div>`},
  
    'prof-services':{tag:'Services',parent:'Industries',title:'Professional Services',desc:'Deliver projects on time and on budget with maximum profitability using SAP solutions.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-kanban-fill"></i></div><h5>Project Management</h5><p>End-to-end project lifecycle from opportunity to invoice with real-time profitability tracking.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Resource Management</h5><p>Skills-based resource matching, utilization optimization, and capacity planning for delivery.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-currency-dollar"></i></div><h5>Billing & Revenue</h5><p>Complex billing models, revenue recognition, and project financials integrated with accounting.</p></div>
      </div></div>`},
  
    'transport':{tag:'Services',parent:'Industries',title:'Transport & Logistics',desc:'Optimize transport and logistics operations with end-to-end visibility and intelligent automation.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-truck-front-fill"></i></div><h5>Transportation Management</h5><p>Multi-modal transport planning, carrier management, and real-time shipment tracking.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-building-fill"></i></div><h5>Warehouse Management</h5><p>Advanced warehouse operations, labor management, and robotics integration for distribution.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-globe2"></i></div><h5>Global Track & Trace</h5><p>End-to-end shipment visibility across carriers, modes, and geographies with exception management.</p></div>
      </div></div>`},
  
    'eco':{tag:'Services',parent:'Industries',title:'Engineering, Construction & Ops',desc:'Manage complex projects, assets, and operations with SAP solutions built for engineering.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-building-fill"></i></div><h5>Project Management</h5><p>Large-scale project planning, cost control, earned value management, and milestone tracking.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-wrench-adjustable-fill"></i></div><h5>Asset Management</h5><p>Plant maintenance, inspection management, and reliability-centered maintenance for assets.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Workforce Management</h5><p>Large workforce planning, skills management, and safety compliance for construction projects.</p></div>
      </div></div>`},
  
    'travel':{tag:'Services',parent:'Industries',title:'Passenger Travel & Leisure',desc:'Deliver exceptional travel experiences and optimize operations with SAP travel solutions.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-airplane-fill"></i></div><h5>Revenue Management</h5><p>Dynamic pricing, yield management, and capacity optimization for airlines and travel operators.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-person-heart"></i></div><h5>Passenger Experience</h5><p>Personalized services, loyalty management, and seamless booking across all channels.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-gear-fill"></i></div><h5>Operations</h5><p>Flight and trip operations, crew management, maintenance, and ground handling optimization.</p></div>
      </div></div>`},
  
    'banking':{tag:'Financial Services',parent:'Industries',title:'Banking & Financial Services',desc:'Modernize core banking, enhance customer experience, and meet regulatory requirements with SAP.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-bank2"></i></div><h5>Core Banking Modernization</h5><p>Replace legacy systems with cloud-native SAP banking solutions for real-time transaction processing.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-shield-check-fill"></i></div><h5>Regulatory Compliance</h5><p>Built-in compliance for Basel III, IFRS 9, GDPR, and regional frameworks across 50+ countries.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-person-check-fill"></i></div><h5>Customer Experience</h5><p>Omnichannel banking, AI-driven personalized offers, and next-generation customer service.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-graph-up-arrow"></i></div><h5>Risk Management</h5><p>Enterprise, credit, market, and liquidity risk management on a single integrated platform.</p></div>
      </div></div>`},
  
    'insurance':{tag:'Financial Services',parent:'Industries',title:'Insurance',desc:'Transform your insurance business with SAP solutions for policy, claims, and customer management.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-file-text-fill"></i></div><h5>Policy Management</h5><p>End-to-end policy lifecycle from quoting to renewal with full regulatory compliance built-in.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-clipboard-check-fill"></i></div><h5>Claims Processing</h5><p>Straight-through claims processing, fraud detection, and digital first notice of loss capabilities.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-shield-check-fill"></i></div><h5>Risk & Compliance</h5><p>Solvency II, IFRS 17, and local insurance regulatory compliance management built-in.</p></div>
      </div></div>`},
  
    'blog':{tag:'Knowledge Hub',parent:'Insights',title:'Blog & Articles',desc:'Expert perspectives, industry trends, and practical guidance from the SAP Platform team.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-pencil-fill"></i></div><h5>SAP Thought Leadership</h5><p>In-depth articles from SAP experts covering S/4HANA, BTP, AI, and digital transformation trends.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-lightbulb-fill"></i></div><h5>Industry Perspectives</h5><p>Industry-specific insights covering manufacturing, retail, banking, healthcare, and more sectors.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-star-fill"></i></div><h5>Best Practices</h5><p>Practical how-to guides and best practices from hundreds of successful SAP implementation projects.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-newspaper"></i></div><h5>Company News</h5><p>Latest news, announcements, and updates from SAP Platform on partnerships and innovations.</p></div>
      </div></div>`},
  
    'whitepapers':{tag:'Knowledge Hub',parent:'Insights',title:'Whitepapers',desc:'Research-backed whitepapers and technical documentation for enterprise SAP decision makers.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-file-earmark-text-fill"></i></div><h5>SAP S/4HANA Migration Guide</h5><p>Comprehensive guide to planning and executing a successful SAP S/4HANA migration.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-file-earmark-text-fill"></i></div><h5>Cloud ROI Framework</h5><p>TCO analysis and ROI calculation framework for SAP cloud transformation projects.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-file-earmark-text-fill"></i></div><h5>AI in ERP 2025</h5><p>Research report on generative AI adoption in enterprise ERP systems and business impact.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-file-earmark-text-fill"></i></div><h5>Sustainability Reporting</h5><p>Guide to implementing SAP Green Ledger and meeting CSRD and ESG reporting requirements.</p></div>
      </div></div>`},
  
    'case-studies':{tag:'Knowledge Hub',parent:'Insights',title:'Case Studies',desc:'Real-world success stories from SAP Platform clients across industries and geographies.',body:`
      <div class="dt-section"><div class="stats-row"><div class="stat-box"><h3>500+</h3><p>Case Studies</p></div><div class="stat-box"><h3>40+</h3><p>Industries</p></div><div class="stat-box"><h3>180+</h3><p>Countries</p></div><div class="stat-box"><h3>98%</h3><p>Satisfaction</p></div></div></div>
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-building-fill"></i></div><h5>Manufacturing Leader</h5><p>Global manufacturer reduced financial close by 60% and improved supply chain visibility by 40%.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-bank2"></i></div><h5>Regional Bank</h5><p>Mid-size bank modernized core banking, reduced compliance costs 30%, improved NPS by 25 points.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-shop-window"></i></div><h5>Retail Chain</h5><p>National retailer unified 500+ stores on single SAP platform, reducing inventory costs by 35%.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-heart-pulse-fill"></i></div><h5>Healthcare System</h5><p>Hospital network streamlined procurement, saving $12M annually while improving supply chain resilience.</p></div>
      </div></div>`},
  
    'research':{tag:'Knowledge Hub',parent:'Insights',title:'Research Reports',desc:'Original research on SAP adoption, digital transformation trends, and enterprise technology benchmarks.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-bar-chart-fill"></i></div><h5>SAP Adoption Benchmark 2025</h5><p>Annual benchmark covering SAP adoption rates, cloud migration progress, and ROI outcomes globally.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-robot"></i></div><h5>AI Readiness Index</h5><p>Research measuring enterprise readiness for AI-powered ERP features across 500+ organizations.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-leaf-fill"></i></div><h5>ESG Maturity Report</h5><p>Survey of sustainability reporting capabilities and gaps across manufacturing, energy, and retail.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-cloud-fill"></i></div><h5>Cloud Migration Survey</h5><p>Research on cloud migration timelines, costs, challenges, and success factors from 300+ projects.</p></div>
      </div></div>`},
  
    'webinars':{tag:'Events & Media',parent:'Insights',title:'Webinars',desc:'Free live and on-demand webinars covering SAP topics, industry trends, and best practices.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-camera-video-fill"></i></div><h5>SAP S/4HANA Live Demo</h5><p>Monthly live demonstrations of SAP S/4HANA capabilities, new features, and migration guidance.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-robot"></i></div><h5>AI in Business Series</h5><p>Quarterly webinar series exploring practical AI use cases in ERP, finance, HR, and supply chain.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-cloud-fill"></i></div><h5>Cloud Migration Masterclass</h5><p>Step-by-step series guiding SAP customers through cloud migration planning and execution.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-play-circle-fill"></i></div><h5>On-Demand Library</h5><p>Access 200+ recorded webinars on all SAP topics available anytime at your convenience.</p></div>
      </div></div>`},
  
    'events':{tag:'Events & Media',parent:'Insights',title:'Events & Conferences',desc:'Join SAP Platform at global conferences, regional events, and exclusive executive roundtables.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-geo-alt-fill"></i></div><h5>SAP Platform Summit</h5><p>Our annual flagship conference bringing together 2,000+ SAP professionals and thought leaders.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Executive Roundtables</h5><p>Invitation-only discussions for C-suite executives on digital transformation strategy.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-building-fill"></i></div><h5>SAP SAPPHIRE Presence</h5><p>Join us at SAP SAPPHIRE NOW — the world's largest SAP conference with 20,000+ attendees.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-globe2"></i></div><h5>Regional Events</h5><p>Industry events across North America, Europe, APAC, and Middle East throughout the year.</p></div>
      </div></div>`},
  
    'videos':{tag:'Events & Media',parent:'Insights',title:'Videos & Podcasts',desc:'Watch product demos, hear client success stories, and listen to expert SAP discussions.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-play-btn-fill"></i></div><h5>Product Demos</h5><p>Short, focused video demonstrations of SAP S/4HANA, BTP, SuccessFactors, and other products.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-trophy-fill"></i></div><h5>Client Success Stories</h5><p>Video testimonials and case study presentations from SAP Platform clients across all industries.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-mic-fill"></i></div><h5>SAP Insights Podcast</h5><p>Weekly podcast featuring SAP experts, industry analysts, and client executives on transformation.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-mortarboard-fill"></i></div><h5>Tutorial Videos</h5><p>How-to video library covering SAP configuration, administration, and end-user training topics.</p></div>
      </div></div>`},
  
    'press':{tag:'Events & Media',parent:'Insights',title:'Press Releases',desc:'Official news, announcements, and press releases from SAP Platform.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-newspaper"></i></div><h5>Partnership Announcements</h5><p>Latest strategic partnership announcements expanding our global SAP ecosystem capabilities.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-award-fill"></i></div><h5>Award Announcements</h5><p>Press releases covering recent industry awards, analyst recognitions, and certifications.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-building-fill"></i></div><h5>Office Expansions</h5><p>News on new office openings, geographic expansion, and market entry announcements globally.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Leadership Updates</h5><p>Executive appointments, leadership changes, and organizational announcements from SAP Platform.</p></div>
      </div></div>`},
  
    'gen-ai':{tag:'Trending',parent:'Insights',title:'Generative AI in ERP',desc:'How Generative AI is reshaping enterprise resource planning systems in 2025 and beyond.',body:`
      <div class="dt-section"><div class="dt-section-title">The AI-ERP Revolution</div><p style="color:var(--muted);font-size:.9rem;line-height:1.8;max-width:800px">Generative AI is no longer a future concept in ERP — it is actively transforming how enterprises plan, execute, and optimize operations today. SAP's Joule AI assistant enables natural language interaction, automated document processing, predictive planning, and intelligent exception management at scale.</p></div>
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-chat-text-fill"></i></div><h5>Natural Language Queries</h5><p>Ask complex business questions in plain English and receive instant insights from ERP data.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-file-text-fill"></i></div><h5>Document Intelligence</h5><p>Automated extraction from invoices, purchase orders, and contracts with 98%+ accuracy.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-graph-up-arrow"></i></div><h5>Predictive Planning</h5><p>AI-driven demand forecasting, cash flow prediction, and workforce planning with learning models.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-exclamation-triangle-fill"></i></div><h5>Exception Management</h5><p>Intelligent anomaly detection and automated escalation for disruptions and financial exceptions.</p></div>
      </div></div>`},
  
    'cloud-migration':{tag:'Trending',parent:'Insights',title:'Cloud Migration Guide',desc:'A comprehensive guide to migrating your SAP landscape to the cloud with minimal risk.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-1-circle-fill"></i></div><h5>Phase 1: Assess</h5><p>SAP landscape discovery, custom code analysis, and cloud readiness evaluation.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-2-circle-fill"></i></div><h5>Phase 2: Plan</h5><p>Migration roadmap, infrastructure sizing, security architecture, and cutover planning.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-3-circle-fill"></i></div><h5>Phase 3: Migrate</h5><p>Data migration, system conversion, and cloud provisioning using automated tooling.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-4-circle-fill"></i></div><h5>Phase 4: Optimize</h5><p>Post-migration performance tuning, cost optimization, and cloud-native feature adoption.</p></div>
      </div></div>
      <div class="dt-section"><div class="stats-row"><div class="stat-box"><h3>98%</h3><p>On-Time</p></div><div class="stat-box"><h3>Zero</h3><p>Data Loss</p></div><div class="stat-box"><h3>45%</h3><p>Cost Savings</p></div><div class="stat-box"><h3>8 Wks</h3><p>Avg Time</p></div></div></div>`},
  
    's4hana-trends':{tag:'Trending',parent:'Insights',title:'SAP S/4HANA Trends 2025',desc:'The latest trends, innovations, and roadmap updates for SAP S/4HANA in 2025.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-robot"></i></div><h5>Embedded AI (Joule)</h5><p>SAP Joule AI assistant embedded across all S/4HANA modules delivering contextual intelligence.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-cloud-fill"></i></div><h5>GROW with SAP Expansion</h5><p>Mid-market cloud ERP adoption accelerating with new pre-configured best practice content packages.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-leaf-fill"></i></div><h5>Green Ledger Integration</h5><p>Carbon accounting now natively integrated into S/4HANA finance for real-time sustainability tracking.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-plug-fill"></i></div><h5>BTP Deep Integration</h5><p>Tighter S/4HANA and BTP integration enabling rapid business process extensions without custom code.</p></div>
      </div></div>`},
  
    'sustainability':{tag:'Trending',parent:'Insights',title:'Sustainability & ESG',desc:'How enterprises use SAP to measure, manage, and report on sustainability commitments.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-leaf-fill"></i></div><h5>SAP Green Ledger</h5><p>Record and report carbon emissions with the same rigor as financial accounting using green ledger.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-recycle"></i></div><h5>Circular Economy</h5><p>Track product lifecycle, material flows, and circular business model performance across value chains.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Social Responsibility</h5><p>Supplier social compliance, human rights due diligence, and community impact measurement tools.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-file-earmark-check-fill"></i></div><h5>ESG Reporting</h5><p>Automated ESG disclosures aligned with GRI, SASB, TCFD, and CSRD regulatory standards globally.</p></div>
      </div></div>`},
  
    'open-positions':{tag:'Careers',parent:'Careers',title:'Open Positions',desc:'Join 5,000+ passionate SAP professionals delivering transformation for global enterprises.',body:`
      <div class="dt-section"><div class="stats-row"><div class="stat-box"><h3>200+</h3><p>Open Roles</p></div><div class="stat-box"><h3>25</h3><p>Offices</p></div><div class="stat-box"><h3>40+</h3><p>Nationalities</p></div><div class="stat-box"><h3>Remote</h3><p>Friendly</p></div></div></div>
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-code-slash"></i></div><h5>SAP Consultants</h5><p>S/4HANA, BTP, SuccessFactors, Ariba, and Analytics Cloud positions at all experience levels.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-cpu-fill"></i></div><h5>Technology & Engineering</h5><p>Full-stack developers, data engineers, AI/ML specialists, and cloud architects for enterprise tech.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-briefcase-fill"></i></div><h5>Business & Management</h5><p>Project managers, business analysts, presales consultants, and practice leads driving success.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-mortarboard-fill"></i></div><h5>Graduate & Internship</h5><p>Structured programs for fresh graduates and students building enterprise technology careers.</p></div>
      </div></div>`},
  
    'life-at-sap':{tag:'Careers',parent:'Careers',title:'Life at SAP Platform',desc:'Discover what it\'s really like to work at one of the world\'s leading SAP partner companies.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-geo-alt-fill"></i></div><h5>Global Offices</h5><p>25 offices across North America, Europe, Asia-Pacific, and Middle East with modern workspaces.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-calendar-event-fill"></i></div><h5>Team Activities</h5><p>Regular team events, hackathons, innovation days, and social activities bringing global teams together.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-house-fill"></i></div><h5>Flexible Working</h5><p>Hybrid and remote working options giving our people flexibility to do their best work anywhere.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Diverse Community</h5><p>40+ nationalities creating a rich, inclusive environment where every perspective is valued.</p></div>
      </div></div>`},
  
    'benefits':{tag:'Careers',parent:'Careers',title:'Employee Benefits',desc:'Comprehensive benefits supporting the health, wealth, and happiness of our global team.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-heart-fill"></i></div><h5>Health & Wellness</h5><p>Comprehensive medical, dental, and vision coverage plus mental health support and wellness programs.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-piggy-bank-fill"></i></div><h5>Financial Security</h5><p>Competitive salaries, performance bonuses, retirement plans, and employee stock programs for all.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-mortarboard-fill"></i></div><h5>Learning Budget</h5><p>Annual learning and development budget for courses, certifications, conferences, and training.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-house-fill"></i></div><h5>Work-Life Balance</h5><p>Generous PTO, parental leave, sabbatical programs, and flexible working arrangements for everyone.</p></div>
      </div></div>`},
  
    'diversity':{tag:'Careers',parent:'Careers',title:'Diversity & Inclusion',desc:'Building a workplace where everyone belongs and every perspective drives better outcomes.',body:`
      <div class="dt-section"><div class="stats-row"><div class="stat-box"><h3>40+</h3><p>Nationalities</p></div><div class="stat-box"><h3>44%</h3><p>Women</p></div><div class="stat-box"><h3>12</h3><p>ERG Groups</p></div><div class="stat-box"><h3>#1</h3><p>DEI Commitment</p></div></div></div>
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Inclusive Hiring</h5><p>Blind CV screening, diverse interview panels, and inclusive job descriptions to eliminate bias.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-heart-fill"></i></div><h5>Employee Resource Groups</h5><p>12 active ERGs supporting women, LGBTQ+, veterans, people with disabilities, and underrepresented groups.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-mortarboard-fill"></i></div><h5>Unconscious Bias Training</h5><p>Mandatory training for all managers and annual refreshers for all employees on inclusive leadership.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-globe2"></i></div><h5>Global Representation</h5><p>40+ nationalities, 44% women in workforce, and active programs increasing leadership diversity.</p></div>
      </div></div>`},
  
    'graduate':{tag:'Careers',parent:'Careers',title:'Graduate Program',desc:'A structured 2-year program launching exceptional SAP careers for the best fresh talent.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-mortarboard-fill"></i></div><h5>SAP Training</h5><p>Intensive 6-month SAP training covering S/4HANA, BTP, and industry modules with certification support.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Mentorship</h5><p>Dedicated senior consultant mentor providing guidance, career advice, and support throughout.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-briefcase-fill"></i></div><h5>Real Projects</h5><p>Hands-on project experience from day one working alongside experienced SAP consultants on live work.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-graph-up-arrow"></i></div><h5>Fast Track Career</h5><p>High performers advance to senior consultant roles in 18 months — faster than industry average.</p></div>
      </div></div>`},
  
    'internship':{tag:'Careers',parent:'Careers',title:'Internship Program',desc:'A 12-week paid internship giving students real-world SAP experience and a pathway to full-time roles.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-laptop-fill"></i></div><h5>Hands-On SAP Access</h5><p>Full access to SAP sandbox environments, training materials, and guided learning from day one.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Team Integration</h5><p>Interns work as full team members alongside consultants on real client projects and initiatives.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-award-fill"></i></div><h5>75% Conversion Rate</h5><p>75% of interns receive full-time job offers — a direct pipeline into the graduate program.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-currency-dollar"></i></div><h5>Paid & Competitive</h5><p>Competitive internship salaries plus access to all employee benefits during the internship period.</p></div>
      </div></div>`},
  
    'leadership-dev':{tag:'Careers',parent:'Careers',title:'Leadership Development',desc:'Grow from consultant to leader with structured development programs and executive coaching.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-graph-up-arrow"></i></div><h5>Manager Track</h5><p>Structured 12-month program developing first-time managers with coaching, workshops, and assignments.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Executive Coaching</h5><p>1-on-1 executive coaching for senior leaders with certified coaches on strategic leadership skills.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-globe2"></i></div><h5>Global Exposure</h5><p>International rotation programs giving high-potential leaders exposure to global markets and cultures.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-mortarboard-fill"></i></div><h5>Leadership Academy</h5><p>Annual summit bringing together 200+ managers from around the world for intensive development.</p></div>
      </div></div>`},
  
    'sap-cert':{tag:'Careers',parent:'Careers',title:'SAP Certification Support',desc:'Full financial and study support to help our consultants achieve and maintain SAP certifications.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-patch-check-fill"></i></div><h5>Exam Fee Coverage</h5><p>100% exam fee coverage for first attempts on all SAP certification exams across all modules and tracks.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-book-fill"></i></div><h5>Study Materials</h5><p>Access to official SAP training materials, practice exams, and internal study groups for preparation.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-calendar-check-fill"></i></div><h5>Paid Study Leave</h5><p>Paid study leave days before certification exams giving consultants dedicated time to prepare.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-trophy-fill"></i></div><h5>Certification Bonus</h5><p>Financial bonus awarded for each successful SAP certification — rewarding expertise development.</p></div>
      </div></div>`},
  
    'culture':{tag:'Careers',parent:'Careers',title:'Our Culture',desc:'A high-performance, people-first culture where innovation, collaboration, and growth thrive every day.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-check-circle-fill"></i></div><h5>Integrity</h5><p>We do what we say. Honest, transparent, and ethical in every engagement and internal interaction.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-lightbulb-fill"></i></div><h5>Innovation</h5><p>We challenge the status quo, experiment fearlessly, and celebrate learning from every experience.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Inclusion</h5><p>Every voice matters — we create a safe space for diverse perspectives to drive better outcomes.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-graph-up-arrow"></i></div><h5>Impact</h5><p>We measure success by tangible value created for clients, employees, and communities globally.</p></div>
      </div></div>`},
  
    'learning':{tag:'Careers',parent:'Careers',title:'Learning & Growth',desc:'Continuous learning is in our DNA — we invest in your development at every career stage.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-laptop-fill"></i></div><h5>Learning Platform</h5><p>Access to 10,000+ courses on SAP, technology, leadership, and business skills via our platform.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-currency-dollar"></i></div><h5>Learning Budget</h5><p>Annual personal budget for external courses, conferences, books, and certifications of your choice.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Communities of Practice</h5><p>Internal knowledge sharing communities across SAP modules, industries, and technology domains.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-graph-up-arrow"></i></div><h5>Career Pathing</h5><p>Clear, transparent career paths from graduate to principal consultant to partner with milestones.</p></div>
      </div></div>`},
  
    'global-ops':{tag:'Careers',parent:'Careers',title:'Global Opportunities',desc:'Build an international career with SAP Platform — offices in 25 countries and still growing.',body:`
      <div class="dt-section"><div class="stats-row"><div class="stat-box"><h3>25</h3><p>Offices</p></div><div class="stat-box"><h3>180+</h3><p>Countries Served</p></div><div class="stat-box"><h3>40+</h3><p>Nationalities</p></div><div class="stat-box"><h3>Global</h3><p>Mobility Program</p></div></div></div>
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-globe2"></i></div><h5>International Transfers</h5><p>Structured international transfer program to relocate to any of our 25 global offices worldwide.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-airplane-fill"></i></div><h5>Global Projects</h5><p>Work on international client projects across multiple geographies building global SAP expertise.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>Cross-Cultural Teams</h5><p>Collaborate with colleagues and clients from diverse cultures in a truly global work environment.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-building-fill"></i></div><h5>25 Offices Worldwide</h5><p>Offices across North America, Europe, Asia-Pacific, Middle East, and Latin America — and growing.</p></div>
      </div></div>`},
  
    'employer-awards':{tag:'Careers',parent:'Careers',title:'Awards as Employer',desc:'Recognized globally as one of the best places to build a career in enterprise technology.',body:`
      <div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-trophy-fill"></i></div><h5>Best Employer 2024</h5><p>Recognized by Great Place to Work in 8 countries as a top employer for culture and growth.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-star-fill"></i></div><h5>Glassdoor Top Rated</h5><p>4.5/5 Glassdoor rating with 92% of employees saying they would recommend us to a friend.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-award-fill"></i></div><h5>Top SAP Employer</h5><p>Voted top SAP services employer by SAP community members for three consecutive years running.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-people-fill"></i></div><h5>LinkedIn Top Company</h5><p>Featured in LinkedIn's Top Companies list for career growth opportunities in the technology sector.</p></div>
      </div></div>`},
  };
  
  /* ============================================================
     PAGE NAVIGATION
  ============================================================ */
  function showDetail(id) {
    const data = PAGES[id] || {
      tag:'SAP Platform', parent:'SAP Platform',
      title: id.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase()),
      desc:'Detailed information and expert insights from the SAP Platform team.',
      body:`<div class="dt-section"><div class="dt-grid">
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-info-circle-fill"></i></div><h5>Expert Guidance</h5><p>Our SAP experts provide personalized guidance on this topic for your specific business needs.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-telephone-fill"></i></div><h5>Get in Touch</h5><p>Schedule a discovery call with our specialists to learn how SAP Platform can help your organization.</p></div>
        <div class="dt-card"><div class="dt-card-icon"><i class="bi bi-file-text-fill"></i></div><h5>Resources Available</h5><p>Access whitepapers, case studies, and solution briefs tailored to this specific area of focus.</p></div>
      </div></div>`
    };
  
    document.getElementById('dtTag').textContent    = data.tag;
    document.getElementById('dtTitle').textContent  = data.title;
    document.getElementById('dtDesc').textContent   = data.desc;
    document.getElementById('dtBody').innerHTML     = data.body;
    document.getElementById('dtParent').textContent = data.parent;
  
    const wrap = document.getElementById('dtCurrWrap');
    const curr = document.getElementById('dtCurr');
    if (data.parent && data.parent !== data.title) {
      wrap.style.display = 'inline-flex';
      curr.textContent   = data.title;
    } else {
      wrap.style.display = 'none';
    }
    showPage('detail');
    triggerReveal();
  }
  
  function goHome() { showPage('home'); }
  
  function showPage(name) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    document.getElementById(name === 'home' ? 'homePage' : 'detailPage').classList.add('active');
    window.scrollTo({ top:0, behavior:'smooth' });
  }
  
  function triggerReveal() {
    setTimeout(() => {
      document.querySelectorAll('.dt-card, .stat-box').forEach((el, i) => {
        el.style.opacity   = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.4s ease ${i*0.05}s, transform 0.4s ease ${i*0.05}s`;
        setTimeout(() => { el.style.opacity='1'; el.style.transform='translateY(0)'; }, 50+i*50);
      });
    }, 40);
  }
  
  /* ============================================================
     DOM READY
  ============================================================ */
  document.addEventListener('DOMContentLoaded', () => {
  
    /* Scroll + back to top */
    const btt = document.getElementById('bttBtn');
    window.addEventListener('scroll', () => {
      document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 10);
      if (btt) btt.classList.toggle('show', window.scrollY > 300);
    });
  
    /* =====================================================
       MEGA MENU — JS hover with delay (fixes the gap bug)
       Pure CSS :hover loses state when mouse moves from
       button to panel across the 1px gap between them.
       JS mouseenter/leave with 150ms delay bridges it.
    ===================================================== */
    const megaItems = document.querySelectorAll('.has-mega');
    let closeTimer  = null;
  
    megaItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        clearTimeout(closeTimer);
        megaItems.forEach(other => other.classList.remove('open'));
        item.classList.add('open');
      });
  
      item.addEventListener('mouseleave', () => {
        closeTimer = setTimeout(() => item.classList.remove('open'), 150);
      });
  
      const panel = item.querySelector('.mega-panel');
      if (panel) {
        panel.addEventListener('mouseenter', () => clearTimeout(closeTimer));
        panel.addEventListener('mouseleave', () => {
          closeTimer = setTimeout(() => item.classList.remove('open'), 150);
        });
      }
    });
  
    document.addEventListener('click', e => {
      if (!e.target.closest('.has-mega')) megaItems.forEach(i => i.classList.remove('open'));
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') megaItems.forEach(i => i.classList.remove('open'));
    });
  
    /* Counter animation */
    let counted = false;
    const heroEl = document.querySelector('.hero-sec');
    if (heroEl) {
      new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !counted) {
          counted = true;
          document.querySelectorAll('.hnum[data-count]').forEach(el => {
            const t=+el.getAttribute('data-count'), s=t/(1500/16); let c=0;
            const ti=setInterval(()=>{ c+=s; if(c>=t){el.textContent=t;clearInterval(ti);}else el.textContent=Math.floor(c); },16);
          });
        }
      }, { threshold:0.3 }).observe(heroEl);
    }
  
    /* Hero stagger */
    ['.hero-h1','.hero-p','.hero-btns','.hero-stats'].forEach((sel,i) => {
      const el = document.querySelector(sel); if(!el) return;
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(18px)';
      el.style.transition = `opacity 0.6s ease ${0.1+i*0.12}s, transform 0.6s ease ${0.1+i*0.12}s`;
      requestAnimationFrame(() => { el.style.opacity='1'; el.style.transform='translateY(0)'; });
    });
  
    /* Scroll reveal */
    const revObs = new IntersectionObserver(entries => {
      entries.forEach((e, idx) => {
        if (e.isIntersecting) {
          setTimeout(() => { e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; }, idx*55);
          revObs.unobserve(e.target);
        }
      });
    }, { threshold:0.07, rootMargin:'0px 0px -30px 0px' });
  
    document.querySelectorAll('.sol-card,.ind-card,.ins-card,.abt-blk,.abt-stat').forEach(el => {
      el.style.opacity   = '0';
      el.style.transform = 'translateY(22px)';
      el.style.transition = 'opacity 0.48s ease, transform 0.48s ease';
      revObs.observe(el);
    });
  
    /* Product tabs */
    document.querySelectorAll('.ptab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.ptab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        const content = document.getElementById('tab-'+tab.dataset.tab);
        if (content) content.classList.add('active');
      });
    });
  
    /* Sol card accents */
    document.querySelectorAll('.sol-card[data-accent]').forEach(card => {
      card.style.setProperty('--accent', card.dataset.accent);
    });
  
    /* Contact form */
    const form    = document.getElementById('cmForm');
    const success = document.getElementById('cmSuccess');
    const subBtn  = document.getElementById('cmSubmit');
    const subTxt  = document.getElementById('cmSubmitTxt');
    const subSpin = document.getElementById('cmSubmitSpin');
  
    function clearErr(el) {
      el.classList.remove('invalid');
      const e = el.parentElement.querySelector('.cm-err');
      if (e) e.classList.remove('show');
    }
  
    function checkField(el, ok) {
      const e = el.parentElement.querySelector('.cm-err');
      if (!ok) { el.classList.add('invalid'); if(e) e.classList.add('show'); return false; }
      el.classList.remove('invalid'); if(e) e.classList.remove('show'); return true;
    }
  
    if (form) {
      document.querySelectorAll('.cm-input').forEach(inp => {
        inp.addEventListener('input',  () => clearErr(inp));
        inp.addEventListener('change', () => clearErr(inp));
      });
  
      form.addEventListener('submit', e => {
        e.preventDefault();
        const fn=document.getElementById('cmFname'), ln=document.getElementById('cmLname');
        const em=document.getElementById('cmEmail'), ph=document.getElementById('cmPhone');
        const ct=document.getElementById('cmCountry'), mg=document.getElementById('cmMsg');
        const pr=document.getElementById('cmPrivacy'), pe=document.getElementById('privErr');
  
        let ok=true;
        ok=checkField(fn,!!fn.value.trim())&&ok;
        ok=checkField(ln,!!ln.value.trim())&&ok;
        ok=checkField(em,/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value))&&ok;
        ok=checkField(ph,/^[\d\+\-\s]{7,15}$/.test(ph.value.trim()))&&ok;
        ok=checkField(ct,!!ct.value)&&ok;
        ok=checkField(mg,!!mg.value.trim())&&ok;
  
        if (!pr.checked) {
          pr.style.outline='2px solid #f87171'; pe.style.display='block'; ok=false;
        } else { pr.style.outline=''; pe.style.display='none'; }
  
        if (!ok) return;
        subTxt.classList.add('d-none'); subSpin.classList.remove('d-none'); subBtn.disabled=true;
        setTimeout(() => { form.classList.add('d-none'); success.classList.remove('d-none'); }, 1800);
      });
    }
  
    function resetForm() {
      if (!form) return;
      form.reset(); form.classList.remove('d-none');
      if(success) success.classList.add('d-none');
      if(subTxt) subTxt.classList.remove('d-none');
      if(subSpin) subSpin.classList.add('d-none');
      if(subBtn) subBtn.disabled=false;
      document.querySelectorAll('.cm-input').forEach(i=>i.classList.remove('invalid'));
      document.querySelectorAll('.cm-err').forEach(e=>e.classList.remove('show'));
      const pr=document.getElementById('cmPrivacy'); if(pr) pr.style.outline='';
      const pe=document.getElementById('privErr'); if(pe) pe.style.display='none';
    }
  
    document.getElementById('resetBtn')?.addEventListener('click', resetForm);
    document.getElementById('contactModal')?.addEventListener('hidden.bs.modal', resetForm);
  });