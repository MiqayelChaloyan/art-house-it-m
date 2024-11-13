interface AssetRef {
    _type: string;
    _ref: string;
};

interface Asset {
    _type: string;
    alt: string;
    asset: AssetRef;
};

interface Ref {
    _ref: string;
    _type: 'reference';
};

interface PortableChildren {
    marks: any;
    text: string;
    _key: string;
    _type: string;
};

interface TEXT {
    children: PortableChildren[];
    markDefs: any;
    style: string;
    _key: string;
    _type: string;
};

interface PRICES {
    _key: string;
    course: string;
    group_lessons: number;
    personal_lessons: number;
    duration: string;
    hours_lessons: string;
};

interface PRICE_LIST_QUERYResult {
    price_list: PRICES[];
};

interface ADDITIONAL_DETALIS {
    detalis: string;
};

interface OUR_TEAM {
    _key: string;
    worker: string;
    profession: string;
    worker_image: Asset;
    additional_detalis: ADDITIONAL_DETALIS[];
};

interface OUR_TEAM_QUERYResult {
    our_team: OUR_TEAM[];
};

interface VIDEO {
    video_url: string;
    video_light: Asset;
    useUpload: boolean;
    videoFile: Asset;
};

interface OUR_DAY {
    _type: string;
    alt: string;
    _key: string;
    asset: AssetRef;
};

interface COURSES_QUERYResult {
    [x: string]: any;
    ogDescription?: string;
    ogImage?: Asset;
    keywords?: string[];
    course_name: string;
    course_image: Asset;
    slug: string;
    about_course: {
        title: string;
        about_content: TEXT[];
    },
    video: VIDEO;
    our_day: OUR_DAY[];
};

interface LESSON {
    course_name: string;
    slug: string | number;
};

interface ORDER {
    order_name: string;
    slug: string | number;
};

interface SELECT_OPTIONS_QUERYResult {
    courses_names: LESSON[];
    orders_names: ORDER[];
};

interface MESSENGER {
    _key: string;
    messenger_name: string;
    messenger: string;
};

interface SOCIAL {
    _key: string;
    social_name: string;
    social_link: string;
};

interface CONTACT_US_QUERYResult {
    address: string;
    phone_numbers: string[];
    messengers: MESSENGER[];
    social_links: SOCIAL[];
    email: string;
};

interface ABOUT {
    title: string;
    content: TEXT;
    image: Asset;
};

interface STRENGTHS {
    _key: string;
    title: string;
    content: any;
    showImage?: boolean;
    image?: Asset;
};

interface ABOUT_US_DETAILS_QUERYResult {
    about_us: ABOUT;
    strengths: STRENGTHS[];
    video: VIDEO;
};

interface FEATURE {
    _key: string;
    feature: string;
};

interface ABOUT_COURSE {
    title: string;
    features: FEATURE[];
    categories: Ref;
    image: Asset;
};

interface HOME_DETALIS_QUERYResult {
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: Asset;
    keywords?: string[];
    about_course: ABOUT_COURSE;
    our_advantages: string[];
    content: TEXT;
};

interface PARTNER_Result {
    _id: string;
    company_name: string;
    logo: Asset;
};

interface WEB_SITE {
    _key: string;
    website_title: string;
    website_activity: string;
    web_site_url: string;
};

interface WEB_SITES_DETAILS_QUERYResult {
    title: string;
    our_works: WEB_SITE[];
};