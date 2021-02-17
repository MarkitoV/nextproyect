import Head from "next/head";
import fetch from 'isomorphic-fetch';

import Container from "../components/container";
import Users from '../components/Users';

const Index = (props) => {
  console.log(props);
  return (
    <div>
      <Head>
        <title>Next.js Proyect - Home</title>
      </Head>
      <Container>
        <h1>Next</h1>
        <Users users = { props.users }/>
      </Container>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://reqres.in/api/users');
  const resJSON = await res.json();
  return {users: resJSON.data};
}

export default Index;

// Nextjs Curso Práctico | Framework de SSR basado en React
// 54:13
