import React from 'react';

import './styles.css';

import { GiReceiveMoney } from 'react-icons/gi';
import { FaMoneyCheck } from 'react-icons/fa'
import * as Icon from 'react-feather';

import Options from '../../components/Options';
import Separator from '../../components/Separator';

const LeftSide = () => {
  return (
      <div id="left-side__container">
        <header>
          <div className="left-side__title">
            <GiReceiveMoney size={35} />
            <p>conta <br/>
              <strong>simples</strong>
            </p>
            <Icon.Bell
              size={19} 
              color="#A0A0A0"
            />
          </div>

          <div className="left-side__balance">
            <span>
              Saldo da Conta <br/>
              <strong>R$26.500,20</strong>
            </span>
            <Icon.EyeOff
              size={20}
              color="#A0A0A0"   
            />
          </div>
        </header>

        <main>

          <div className="left-side__option">
            <Icon.Home size={18}/>
            <Options text="Início"/>
          </div>
          <div className="left-side__option">
            <Icon.ArrowDown size={18}/>
            <Options text="Depositar"/>
          </div>
          <div className="left-side__option">
            <Icon.FileText size={18}/>
            <Options text="Extrato da conta"/>
          </div>
          <div className="left-side__option">
            <Icon.CreditCard size={18}/>
            <Options text="Cartões"/>
          </div>
          <div className="left-side__option">
            <Icon.DollarSign size={18}/>
            <Options text="Emitir cobrança"/>
          </div>
          <div className="left-side__option">
            <Icon.BarChart size={18}/>
            <Options text="Gestão de cobrança"/>
          </div>
          <div className="left-side__option">
            <Icon.Share size={18}/>
            <Options text="Transfêrencia"/>
          </div>
          <div className="left-side__option">
            <FaMoneyCheck size={18}/>
            <Options text="Pagamentos"/>
          </div>

          <Separator />

          <strong>
              Mais opções
            </strong>

            <div className="left-side__option">
              <Icon.Calendar size={18}/>
              <Options text="Agendamentos"/>
            </div>
            <div className="left-side__option">
              <Icon.FileText size={18}/>
              <Options text="Comprovantes"/>
            </div>
            <div className="left-side__option">
              <Icon.Percent size={18}/>
              <Options text="Tarifas"/>
            </div>
            <div className="left-side__option">
              <Icon.PhoneCall size={18}/>
              <Options text="Fale conosco"/>
            </div>
            <div className="left-side__option">
              <Icon.Award size={18}/>
              <Options text="Benefícios"/>
            </div>

        </main>

        <footer>
          <div className="left-side__profile info">
            <Icon.User size={40} />

            <div className="left-side__bank data">
              <p>
                Joinville
              </p>

              <p>Agência 
                <strong>
                  0001
                </strong>
              </p>

              <p>Conta 
                <strong>
                  12356-9
                </strong>
              </p>
            </div>

            <Icon.ArrowDown 
              size={20}
              color="#A0A0A0"
            />
          </div> 
        </footer>
      </div>
  );
}

export default LeftSide;