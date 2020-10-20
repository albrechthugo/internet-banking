import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import { GiReceiveMoney } from 'react-icons/gi';
import { FaMoneyCheck } from 'react-icons/fa'
import * as Icon from 'react-feather';

import Options from '../../components/Options';
import Separator from '../../components/Separator';

const LeftSide = (props) => {  
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
              <strong>R$ {props.saldo}</strong>
            </span>
            <Icon.EyeOff
              size={20}
              color="#A0A0A0"   
            />
          </div>
        </header>

        <main>
          <Link to="/dashboard/">
            <Options 
              text="Início" 
              icon={<Icon.Home size={20}/>}
            />
          </Link>
          
          <Options 
            text="Depositar" 
            icon={<Icon.ArrowDown size={20}/>}
          />

          <Link to="/dashboard/details/">
            <Options 
              text="Extrato da conta" 
              icon={<Icon.FileText size={20}/>}
            />
          </Link>
          
          <Link to="/dashboard/cards/">
            <Options 
              text="Cartões" 
              icon={<Icon.CreditCard size={20}/>}
            />
          </Link>
          
          <Options 
            text="Emitir cobrança" 
            icon={<Icon.DollarSign size={20}/>}
          />

          <Options 
            text="Gestão de cobrança" 
            icon={<Icon.BarChart size={20}/>}
          />

          <Options 
            text="Transfêrencia" 
            icon={<Icon.Share size={20}/>}
          />

          <Options 
            text="Pagamentos" 
            icon={<FaMoneyCheck size={20}/>}
          />

          <Separator />

          <strong>
              Mais opções
            </strong>
              <Options 
                text="Agendamentos" 
                icon={<Icon.Calendar size={20}/>}
              />
              <Options 
                text="Comprovantes" 
                icon={<Icon.FileText size={20}/>}
              />
              <Options 
                text="Tarifas" 
                icon={<Icon.Percent size={20}/>}
              />
              <Options 
                text="Fale conosco" 
                icon={<Icon.PhoneCall size={20}/>}
              />
              <Options 
                text="Benefícios" 
                icon={<Icon.Award size={20}/>}
              />

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
                  {props.agencia}
                </strong>
              </p>

              <p>Conta 
                <strong>
                  {props.conta}-{props.digito}
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