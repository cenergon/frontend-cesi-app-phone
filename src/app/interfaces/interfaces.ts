
export interface RespuestaPosts {
    ok: boolean;
    pagina: number;
    postList: Post[];
  }
  
  export interface Post {
    imgs?: string[];
    _id?: string;
    mensaje?: string;
    coords?: string;
    usuario?: Usuario;
    created?: string;
  }
  
  export interface Usuario {
    avatar?: string;
    _id?: string;
    nombre?: string;
    email?: string;
    password?: string;
    dni?: number;
    cbu?: string;
  }

  export interface ComponentMenu {
    icon: string;
    name: string;
    redirectTo: string;
}

  
  