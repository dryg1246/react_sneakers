import Card from '../components/Card';

function Favorites({ items }) {
    // Check if 'items' is undefined or null
    if (!items || !items.length) {
        return (
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Favorites</h1>
                </div>
                <p>No items in favorites.</p>
            </div>
        );
    }

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Favorites</h1>
            </div>
            <div className="d-flex flex-wrap">
                {items.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default Favorites;