import { Pagination } from "react-bootstrap";

function PageButtons(props) {

    let pages = [];
    for (let number = 0; number < props.fProducts.length/20; number++) {
        pages.push(number + 1);
    }

    return ( 
        <Pagination>{pages.map(number =>
            <Pagination.Item onClick={() => props.cPage(number)} key={number} active={number === props.actPage}>
                {number}
            </Pagination.Item>)}
        </Pagination>
    );
}

export default PageButtons;