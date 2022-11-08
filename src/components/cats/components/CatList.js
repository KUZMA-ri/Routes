import { Link } from 'react-router-dom';

const Catlist = ({cats}) => {  
    return(
        <>
            {cats && (
                cats.map(cat => (
                    <Link key={cat.id} to={`catlist/${cat.id}`}>
                        <h2>{cat.name}</h2>
                    </Link>
                ))
            )}
        </>
    )
}

export default Catlist