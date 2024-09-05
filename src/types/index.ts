/* Form Contact types */
export interface FormContact {
    email: string;
    phone: string;
    training_center: number;
    message: string;
    course_name: string;
};

/* Form Order types */
export interface FormOrder {
    surname: string;
    lastname: string;
    firstname: string;
    email: string;
    phone: string;
    training_center: number;
    message: string;
    order_name: string;
};

export interface socialNetwork {
    facebook: (props: { size: string | number; fill: string | number } | any) => JSX.Element,
    x: ({ size, fill }: { size: string | number; fill: string | number } | any) => JSX.Element,
    instagram: ({ size, fill }: { size: string | number; fill: string | number } | any) => JSX.Element,
    gmail: ({ size, fill }: { size: string | number; fill: string | number } | any) => JSX.Element,
    linkedin: ({ size, fill }: { size: string | number; fill: string | number } | any) => JSX.Element,
    pinterest: (props: { size: string | number; fill: string | number } | any) => JSX.Element,
    telegram: ({ size, fill }: { size: string | number; fill: string | number } | any) => JSX.Element,
    tiktok: ({ size, fill }: { size: string | number; fill: string | number } | any) => JSX.Element,
    viber: ({ size, fill }: { size: string | number; fill: string | number } | any) => JSX.Element,
    whatsapp: ({ size, fill }: { size: string | number; fill: string | number } | any) => JSX.Element,
    youtube: ({ size, fill }: { size: string | number; fill: string | number } | any) => JSX.Element,
};










interface PortableChildren {
    marks: any;
    text: string;
    _key: string;
    _type: string;
};

export interface TEXT {
    children: PortableChildren[];
    markDefs: any;
    style: string;
    _key: string;
    _type: string;
};

export interface Asset {
    _ref: string;
    _type: string;
};

export interface Image {
    asset: Asset;
    _type: string;
    alt: string;
};

export interface Ref {
    _type: string;
    _ref: string;
};

export type ImagePath = {
    src: string,
    width: number,
    height: number

} | any;

export type ContactUsResponse = { status: number } | { error: string } | any;

export interface Site {
    ogTitle: string,
    ogImage: {
        _type: string,
        asset: {
            _ref: string,
            _type: string
        }
    },
    ogDescription: string
};




/* REDUX STATE TYPES */
export interface ReduxType {
    questions: Questions;
    modal: Modal;
    player: Player;
    loader: Loader;
};

interface Loader {
    isLoader: boolean;
};

interface Player {
    isPlay: boolean;
    path: string;
};

interface Modal {
    isOpen: boolean;
};

interface Questions {
    quiz: any[];
    trace: number;
    score: number;
    answer: any[];
    isLoading: boolean;
    isViewAnswer: boolean;
};
