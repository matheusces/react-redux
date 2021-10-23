export enum EmployesTypes {
    LOAD_REQUEST = '@employes/LOAD_REQUEST',
    LOAD_SUCCESS = '@employes/LOAD_SUCCESS',
    LOAD_FAILURE = '@employes/LOAD_FAILURE',
}

export interface Role {
    id: number;
    description: string;
}

export interface Employe {
    id?: number;
    name?: string;
    lastName?: string;
    email?: string;
    password?: string;
    date?: string;
    salary?: number;
}

export interface EmployeState {
    employes: Employe[];
    employe: Employe;
    loading: boolean;
    error: boolean;
}