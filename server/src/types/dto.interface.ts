export interface DTO {
    validate: () => void;
    data: {[key: string]: any};
}