import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/43911808?s=460&u=edbaebcd9105cd3e0f6fc9db480d474c966b80c6&v=4"
            alt="Ariel Vaz"
          />
          <div>
            <strong>rocketseat/@unform</strong>
            <p>Easy peasy improve your form!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/43911808?s=460&u=edbaebcd9105cd3e0f6fc9db480d474c966b80c6&v=4"
            alt="Ariel Vaz"
          />
          <div>
            <strong>rocketseat/@unform</strong>
            <p>Easy peasy improve your form!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/43911808?s=460&u=edbaebcd9105cd3e0f6fc9db480d474c966b80c6&v=4"
            alt="Ariel Vaz"
          />
          <div>
            <strong>rocketseat/@unform</strong>
            <p>Easy peasy improve your form!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
