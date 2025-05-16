function Marker({...props}) {
    return (
        <mesh {...props}>
            <boxGeometry args={[2, 1, 1]}/>
            <meshStandardMaterial />
        </mesh>
    )
}
export default Marker