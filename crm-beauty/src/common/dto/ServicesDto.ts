export interface ServicesDto {
    id: number;
    name: string;
    description: string;
    price: number;
    photo: string;
    isPopular: boolean;
}

export interface CreateServicesDto extends Omit<ServicesDto, 'id'> {}