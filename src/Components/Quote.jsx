
function Quote({ text, author }){
    return (
        <figure className="quote">
            <blockquote className="quote__text">{ text }</blockquote>
            <figcaption className="quote__author">- { author }</figcaption>
        </figure>
    );
}

export default Quote;