
    export interface Content {
        img: string;
        title: string;
    }

    export interface ICollection {
        _id: string;
        title: string;
        description: string;
        bannerImg: string;
        content: Content[];
        createdAt: Date;
        updatedAt: Date;
        __v: number;
    }
