from sqlalchemy import text
from database.db import SessionLocal

# user_side
def get_product_by_name(product_name):
    session = SessionLocal()
    query = text("""
        SELECT product_name, category, barcode, price
        FROM products
        WHERE product_name = :name
    """)
    result = session.execute(query, {"name": product_name}).fetchone()
    session.close()
    return result


#saler_side
def get_all_products():
    session = SessionLocal()
    query = text("""
        SELECT id, product_name, price
        FROM products
        ORDER BY product_name
    """)
    results = session.execute(query).fetchall()
    session.close()
    return results


def update_product_price(product_id: int, new_price: int):
    session = SessionLocal()
    query = text("""
        UPDATE products
        SET price = :price
        WHERE id = :id
    """)
    session.execute(query, {"price": new_price, "id": product_id})
    session.commit()
    session.close()
