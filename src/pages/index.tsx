import { styled } from "../styles";

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 4,
  padding: '0.5rem 1rem',
  border: 0,
  span: {
    fontWeight: '700',
    color: 'white'
  },
  '&:hover': {
    transition: '0.4s filter',
    filter: 'brightness(0.8)'
  }
});

export default function Home() {
  return (
    <>
      <h1>Hello World!</h1>
      <Button><span>Rocketseat</span>submit</Button>
    </>
    
  );
}
