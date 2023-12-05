const PointLight = () => {
    return (
      <>
      <pointLight
        castShadow
        position={[-4, 5, -3]}
        color={0xffffff}
        distance={10}
        intensity={132}
        />
        </>
    );
  };



  export default function Lights () {
    return (
        <>
        <PointLight />
        <ambientLight intensity={1}/>
        </>
    )
  }