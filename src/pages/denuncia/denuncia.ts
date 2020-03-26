
export class Denuncia {
    nome: string;
    convenio: number;
    idprofissao: number;
    telefone: string;
    sexo: string;
    idade: number;
    dat_nascimento: Date;
    idnotificacao: number;
    matricula: number;
    dt_notificacao: Date;
    dt_ini_sintomas: Date;
    ind_febre: boolean;
    ind_sint_gripais: boolean;
    ind_falta_ar_caminhada: boolean;
    ind_falta_ar_repouso: boolean;
    ind_tosse: boolean;
    ind_congestao_nasal: boolean;
    ind_dor_garganta: boolean;
    token: string;
    ind_escovar_dentes : boolean;
    ind_pentear_cabelos: boolean;
    ind_tomar_banho_sozinho: boolean;
    ind_outros: boolean;
    ind_falta_ar : boolean;
    ind_subir_escada: boolean;
    

    constructor(){
        
        this.nome = null;
        this.convenio= null;;
        this.idprofissao= null;;
        this.telefone= null;
        this.sexo= null;
        this.idade= null;;
        this.dat_nascimento= null;;
        this.idnotificacao= null;;
        this.matricula= null;;
        this.dt_notificacao= null;;
        this.dt_ini_sintomas= null;;
        this.ind_febre= null;
        this.ind_sint_gripais= null;
        this.ind_falta_ar_caminhada= null;
        this.ind_falta_ar_repouso= null;
        this.ind_tosse= null;
        this.ind_congestao_nasal= null;
        this.ind_dor_garganta= null; 
        this.token= 'SU5URVJORSNDT1JPTkFfVklSVVMj';
        this.ind_escovar_dentes = null;
        this.ind_pentear_cabelos = null;
        this.ind_tomar_banho_sozinho = null;
        this.ind_outros = null;
        this.ind_falta_ar = null;
        this.ind_subir_escada = null;
        
    }

}

