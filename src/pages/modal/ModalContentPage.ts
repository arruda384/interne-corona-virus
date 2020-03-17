import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';
@Component({

  selector: 'modal-page',
  templateUrl: 'modal-content.html'
})
export class ModalContentPage {
  info;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public navCtrl: NavController,

  ) {
    var informacoes = [
      {
        titulo: 'Atenção aos Sintomas',
        texto: `O vírus pode deixar as pessoas doentes, geralmente com uma doença do trato respiratório superior de leve a moderada, semelhante a um resfriado comum. Os sintomas do Coronavírus incluem coriza, tosse, dor de garganta, possivelmente dor de cabeça e talvez febre, que pode durar alguns dias. 
        Para aqueles com um sistema imunológico enfraquecido, idosos e muito jovens, há uma chance do vírus causar uma doença do trato respiratório mais baixa e muito mais grave, como uma pneumonia ou bronquite.`, 
                   
        image: './assets/imgs/01.jpg'
      },
      {
        titulo: 'Lave sempre as mãos',
        texto: `Uma grande quantidade de organismos entra em contato com o nosso corpo inicialmente pela mão. Isso acontece porque a mão frequentemente está em contato com superfícies que podem estar contaminadas (maçanetas de portas, caixas eletrônicos e barras dos transportes públicos) e até mesmo com pessoas doentes.
        A via de transmissão de várias doenças poderia ser facilmente quebrada se todas as pessoas lavassem as mãos com uma maior frequência.
        Utilize água corrente e sabão para a higienização, podendo utilizar também álcool gel 70% no processo.`,
        image: './assets/imgs/02.jpg'
      },
      {
        titulo: 'Não toque no rosto com as mãos sujas',
        texto: `Quando esfregamos os nossos rostos, podemos contaminar o nosso corpo com os germes potencialmente perigosos que as nossas mãos “pegaram” em outras ocasiões. Desta forma, podemos carregar partículas invisíveis de cocô ou muco que estão espalhadas pelo mundo, muitas vezes deixadas por pessoas que não lavaram as mãos direito.
        Um estudo de 2008 revelou, por exemplo, que as pessoas que relataram tocar no rosto raramente tinham cerca de 80% menos probabilidade de contrair a gripe sazonal, em comparação com as pessoas com os níveis mais elevados de “probabilidade de tocar o rosto”.`,
        image: './assets/imgs/03.jpg'

      },

      {
        titulo: 'Cubra sempre o rosto ao tossir ou espirrar',
        texto: `Desta forma, você diminui a quantidade do vírus da gripe que poderia liberar em um ambiente. O diretor do Departamento de Vigilância das Doenças Transmissíveis da Secretaria de Vigilância em Saúde do Ministério da Saúde, Claudio Maierovitch, alerta para outras atitudes que evitam a disseminação do vírus ainda que se faça uso do lenço. “O lenço deve ser, de preferência, descartável e depois de utilizá-lo a pessoa tem que descartá-lo e em seguida lavar as mãos”, alerta o diretor.
        Mantenha o ambiente onde está sempre ventilado`,
        image: './assets/imgs/04.jpg'

      },

      {
        titulo: 'Não compartilhe objetos pessoais',
        texto: `O próprio nome já dá uma pista, objeto de uso pessoal. Às vezes, pode parecer inevitável compartilhar esses itens com familiares e amigos, mas existe o risco de contágio por isso.
        Objetos como: escovas de dente, barbeadores, barbeadores, talheres, copos, garrafas, etc, são agentes que podem carregar o vírus facilmente consigo e contaminar quem utiliza os itens.
        `,
        image: './assets/imgs/05.jpg'

      },

      {
        titulo: 'Evite aglomerações se estiver doente',
        texto: `Por estar doente, sua imunidade se torna abaixo do normal. Caso não tenha contraído o COVID19 ainda, você aumenta os riscos de contaminação, e caso tenha contraído mesmo sem saber, há a chance de você se tornar um agente proliferador do vírus.`,
        image: './assets/imgs/06.jpg'

      },

      {
        titulo: 'Adote o uso de máscaras',
        texto: `Uma série de pesquisas científicas demonstrou que o uso de máscaras faciais durante surtos de doenças virais como a causada pelo coronavírus 2019 (COVID-19) só demonstrou ser eficaz para proteger os profissionais de saúde e reduzir o risco de pacientes doentes espalharem a doença.
        
Com base nessas evidências, a Organização Pan-Americana da Saúde/Organização Mundial da Saúde (OPAS/OMS) recomenda o uso de máscaras faciais para:
• Pessoas que apresentam sintomas respiratórios, como tosse, espirros ou dificuldade em respirar, mesmo quando procuram atendimento médico, para proteger as pessoas ao seu redor.

• Pessoas (incluindo familiares) que prestam atendimento a pessoas com sintomas respiratórios.
• Profissionais de saúde, quando entram em uma sala com pacientes ou quando tratam um indivíduo com sintomas respiratórios e de acordo com o tipo de atendimento que será prestado.`,
        image: './assets/imgs/07.jpg'

      },

      {
        titulo: 'Mantenha uma alimentação saudável',
        texto: `Aumentar sua imunidade também é um método eficaz de prevenção contra o COVID19. Para fortalecer o sistema imunológico, é importante comer mais alimentos ricos em vitaminas e minerais, diminuir o consumo de fontes de gordura, açúcar e industrializados, com corantes e conservantes, e pode ser indicado tomar remédios ou suplementos que aumentam a imunidade.`,
        image: './assets/imgs/08.jpg'

      }
    ];
    this.info = informacoes[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}