
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


export interface RespuestaDocumentos {
  ok: boolean;
  pagina: number;
  postList: Post[];
}

  export interface Documento {
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
    password?: string;
    dni?: number;
    cbu?: string;
    email?: string;
    email_verified?: boolean;
    family_name?: string;
    given_name?: string;
    locale?: string;
    name?: string;
    nickname?: string;
    picture?: string;
    sub?: string; // id que brinda auth0
    updated_at?: string;
  }

export interface ComponentMenu {
    icon: string;
    name: string;
    redirectTo: string;
}

export interface DniCode {
  dniCode ?: string;
  nroTramite?: string;
  apellido?: string;
  nombre?: string;
  sexo?: string;
  dni?: number;
  ejemplar?: string;
  fechaNacimiento?: string;
  fechaEmision?: string;
  codigo?: string;
  coords?: string;
  created?: Date;
}
  