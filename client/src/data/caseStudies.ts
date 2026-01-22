export interface CaseStudy {
    slug: string;
    client: string;
    industry: string;
    platform: string;
    objective: string;
    role: string;
    duration: string;
    challenge: string;
    strategy: string[];
    execution: string[];
    metrics: {
        label: string;
        value: string;
    }[];
    visuals: string[];
    results: string;
    learnings: string[];
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "ecommerce-meta-ads-campaign",
        client: "Healthy Meals",
        industry: "Food & Beverage",
        platform: "Meta Ads (Facebook & Instagram)",
        objective: "Increase online orders and brand awareness for meal prep service",
        role: "Performance Marketer & Creative Strategist",
        duration: "3 months",
        challenge: "Low brand awareness in competitive market with high customer acquisition costs. Needed to build trust and drive conversions while maintaining profitable ROAS.",
        strategy: [
            "Developed audience segmentation strategy targeting health-conscious professionals",
            "Created multi-stage funnel with awareness, consideration, and conversion campaigns",
            "Implemented dynamic product catalog ads for retargeting",
            "A/B tested creative formats: video testimonials vs. product showcases",
            "Optimized for conversion events using Meta Pixel tracking"
        ],
        execution: [
            "Launched 15+ ad variations across carousel, video, and static formats",
            "Set up conversion tracking and custom audiences",
            "Created lookalike audiences from existing customer data",
            "Implemented daily budget optimization and bid strategies",
            "Produced UGC-style content and professional product photography"
        ],
        metrics: [
            { label: "ROAS", value: "4.2x" },
            { label: "Cost Per Acquisition", value: "-42%" },
            { label: "Conversion Rate", value: "+156%" },
            { label: "Ad Spend", value: "$15,000" },
            { label: "Revenue Generated", value: "$63,000" }
        ],
        visuals: [
            "/images/case-studies/healthy-meals/dashboard.jpg",
            "/images/case-studies/healthy-meals/ad-creative-1.jpg",
            "/images/case-studies/healthy-meals/ad-creative-2.jpg",
            "/images/case-studies/healthy-meals/results.jpg"
        ],
        results: "Achieved 4.2x ROAS with $63,000 in revenue from $15,000 ad spend. Reduced CPA by 42% while scaling daily budget by 3x. Built sustainable customer acquisition channel with consistent profitability.",
        learnings: [
            "UGC-style content outperformed professional photography by 67% in CTR",
            "Video testimonials drove highest conversion rates for cold audiences",
            "Carousel ads performed best for retargeting warm audiences",
            "Optimal ad frequency was 2-3 impressions per week to avoid fatigue"
        ]
    },
    {
        slug: "saas-lead-generation-campaign",
        client: "BeyondCars",
        industry: "Automotive SaaS",
        platform: "Meta Ads & LinkedIn Ads",
        objective: "Generate qualified leads for B2B automotive software platform",
        role: "Campaign Manager & Funnel Strategist",
        duration: "4 months",
        challenge: "Complex B2B sales cycle with multiple decision-makers. Needed to generate high-quality leads while educating market about new technology solution.",
        strategy: [
            "Built educational content funnel with whitepapers and case studies",
            "Targeted automotive dealership owners and managers",
            "Created LinkedIn thought leadership campaign",
            "Developed lead magnet strategy with free trial offers",
            "Implemented lead scoring and CRM integration"
        ],
        execution: [
            "Produced 5 educational video ads explaining product benefits",
            "Created gated content offers (industry reports, ROI calculators)",
            "Set up automated email nurture sequences",
            "Launched retargeting campaigns for website visitors",
            "A/B tested landing pages for conversion optimization"
        ],
        metrics: [
            { label: "Qualified Leads", value: "287" },
            { label: "Cost Per Lead", value: "$42" },
            { label: "Lead-to-Customer Rate", value: "18%" },
            { label: "Pipeline Value", value: "$420,000" },
            { label: "Closed Deals", value: "52" }
        ],
        visuals: [
            "/images/case-studies/beyondcars/campaign-overview.jpg",
            "/images/case-studies/beyondcars/lead-funnel.jpg",
            "/images/case-studies/beyondcars/ad-examples.jpg"
        ],
        results: "Generated 287 qualified leads at $42 CPL, resulting in 52 closed deals and $420K in pipeline value. Established repeatable lead generation system with 18% lead-to-customer conversion rate.",
        learnings: [
            "Educational content significantly improved lead quality",
            "LinkedIn outperformed Meta for decision-maker targeting",
            "Video demos drove 3x higher engagement than static ads",
            "Multi-touch attribution showed 7-10 touchpoints before conversion"
        ]
    },
    {
        slug: "prepmeal",
        client: "PrepMeal",
        industry: "Healthy Food / Meal Plans",
        platform: "Meta Ads (Facebook & Instagram)",
        objective: "Increase online orders and lead generation for meal plan subscriptions in UAE market",
        role: "Performance Marketer & Campaign Strategist",
        duration: "4 months",
        challenge: "Low brand awareness in competitive meal prep market with high customer acquisition costs. Needed to build trust in online food subscriptions and improve conversion rates from traffic to orders.",
        strategy: [
            "Developed audience segmentation targeting health-conscious professionals and fitness enthusiasts",
            "Created trust-based content strategy with customer testimonials and meal prep transparency",
            "Implemented multi-stage funnel with awareness, consideration, and conversion campaigns",
            "A/B tested creative formats: video reels vs. static banners vs. carousel ads",
            "Built retargeting funnels for cart abandoners and website visitors",
            "Integrated WhatsApp Business for lead nurturing and customer support"
        ],
        execution: [
            "Launched 20+ ad variations across video reels, static images, and carousel formats",
            "Produced UGC-style content showing real meal prep process and packaging",
            "Set up conversion tracking with Meta Pixel and custom events",
            "Created lookalike audiences from existing customer database",
            "Implemented daily budget optimization with automated bid strategies",
            "Designed landing pages optimized for mobile conversion",
            "Built email + WhatsApp nurture sequences for lead follow-up"
        ],
        metrics: [
            { label: "ROAS", value: "4.1x" },
            { label: "Leads Generated", value: "300+" },
            { label: "Cost Per Lead", value: "-38%" },
            { label: "Conversion Rate", value: "+62%" },
            { label: "Ad Spend", value: "AED 45,000" }
        ],
        visuals: [
            "/images/case-studies/prepmeal/dashboard.jpg",
            "/images/case-studies/prepmeal/ad-creative-1.jpg",
            "/images/case-studies/prepmeal/ad-creative-2.jpg",
            "/images/case-studies/prepmeal/funnel.jpg",
            "/images/case-studies/prepmeal/results.jpg"
        ],
        results: "Achieved 4.1x ROAS with 300+ qualified leads generated. Reduced cost per lead by 38% while increasing conversion rate by 62%. Built sustainable customer acquisition system with consistent weekly orders and improved brand trust in the UAE market.",
        learnings: [
            "Video reels showing meal prep process outperformed static images by 85% in engagement",
            "Trust-based content (customer testimonials, transparency) significantly improved conversion rates",
            "WhatsApp integration for lead nurturing increased conversion by 40%",
            "Mobile-optimized landing pages were critical - 78% of traffic came from mobile",
            "Retargeting cart abandoners with limited-time offers drove 25% of total conversions"
        ]
    }
];
