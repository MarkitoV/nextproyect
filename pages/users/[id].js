import { useRouter } from 'next/router';
import fetch from 'isomorphic-fetch';

const User = () => {
  const router = useRouter();
  const { id } = router.query;
  return <h1>profile</h1>
}

User.getInitialProps = async (ctx) => {
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const resJSON = await res.json();
  console.log(resJSON);
  return {}
}

export default User;