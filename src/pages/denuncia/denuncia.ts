
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
    ind_febre: string;
    ind_sint_gripais: string;
    ind_falta_ar_caminhada: string;
    ind_falta_ar_repouso: string;
    ind_tosse: string;
    ind_congestao_nasal: string;
    ind_dor_garganta: string;
    token: string;

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
    }

}