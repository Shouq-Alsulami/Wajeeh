-- ========================================
-- PostgreSQL Database Verification Script
-- Run this after executing schema.sql and seed_data.sql
-- ========================================

-- Table Record Counts
SELECT 
    'Products' AS table_name, 
    COUNT(*) AS record_count 
FROM products
UNION ALL
SELECT 
    'Customers' AS table_name, 
    COUNT(*) AS record_count 
FROM customers
UNION ALL
SELECT 
    'Orders' AS table_name, 
    COUNT(*) AS record_count 
FROM orders
UNION ALL
SELECT 
    'Order Items' AS table_name, 
    COUNT(*) AS record_count 
FROM order_items
UNION ALL
SELECT 
    'Payments' AS table_name, 
    COUNT(*) AS record_count 
FROM payments
UNION ALL
SELECT 
    'Shipping' AS table_name, 
    COUNT(*) AS record_count 
FROM shipping
UNION ALL
SELECT 
    'Returns' AS table_name, 
    COUNT(*) AS record_count 
FROM returns
ORDER BY table_name;

-- Sample Data Verification
SELECT '========================================' AS info;
SELECT 'Sample Products:' AS info;
SELECT id, name, category, price, stock_quantity FROM products LIMIT 5;

SELECT '========================================' AS info;
SELECT 'Sample Customers:' AS info;
SELECT id, full_name, email, city, country FROM customers LIMIT 5;

SELECT '========================================' AS info;
SELECT 'Sample Orders:' AS info;
SELECT id, order_number, customer_id, total_amount, status, order_date FROM orders LIMIT 5;

-- Data Relationships Verification
SELECT '========================================' AS info;
SELECT 'Data Relationships Verification' AS info;

SELECT 
    'Orders with Customers' AS relationship,
    COUNT(*) AS count
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id;

SELECT 
    'Order Items with Orders' AS relationship,
    COUNT(*) AS count
FROM order_items oi
INNER JOIN orders o ON oi.order_id = o.id;

SELECT 
    'Order Items with Products' AS relationship,
    COUNT(*) AS count
FROM order_items oi
INNER JOIN products p ON oi.product_id = p.id;

SELECT 
    'Payments with Orders' AS relationship,
    COUNT(*) AS count
FROM payments p
INNER JOIN orders o ON p.order_id = o.id;

SELECT 
    'Shipping with Orders' AS relationship,
    COUNT(*) AS count
FROM shipping s
INNER JOIN orders o ON s.order_id = o.id;

SELECT '========================================' AS info;
SELECT 'Verification Complete!' AS info;
