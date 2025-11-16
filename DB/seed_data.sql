-- ========================================
-- PostgreSQL Database Seed Data
-- Sample data for E-commerce Database
-- ========================================

-- Clear existing data (optional - use with caution in production)
-- DELETE FROM returns;
-- DELETE FROM shipping;
-- DELETE FROM payments;
-- DELETE FROM order_items;
-- DELETE FROM orders;
-- DELETE FROM customers;
-- DELETE FROM products;

-- ========================================
-- Insert Products
-- ========================================
INSERT INTO products (id, name, category, description, price, stock_quantity, image_url, is_active, created_at) VALUES
(1, 'Laptop Pro 15"', 'Electronics', 'High-performance laptop with 16GB RAM and 512GB SSD', 1299.99, 25, 'https://example.com/images/laptop-pro.jpg', true, CURRENT_TIMESTAMP),
(2, 'Wireless Mouse', 'Electronics', 'Ergonomic wireless mouse with rechargeable battery', 29.99, 150, 'https://example.com/images/mouse.jpg', true, CURRENT_TIMESTAMP),
(3, 'Mechanical Keyboard', 'Electronics', 'RGB mechanical keyboard with cherry MX switches', 149.99, 50, 'https://example.com/images/keyboard.jpg', true, CURRENT_TIMESTAMP),
(4, 'Office Chair', 'Furniture', 'Ergonomic office chair with lumbar support', 299.99, 30, 'https://example.com/images/chair.jpg', true, CURRENT_TIMESTAMP),
(5, 'Standing Desk', 'Furniture', 'Adjustable height standing desk with electric motor', 599.99, 15, 'https://example.com/images/desk.jpg', true, CURRENT_TIMESTAMP),
(6, 'Monitor 27" 4K', 'Electronics', 'Ultra HD 4K monitor with HDR support', 449.99, 40, 'https://example.com/images/monitor.jpg', true, CURRENT_TIMESTAMP),
(7, 'Webcam HD', 'Electronics', '1080p HD webcam with auto-focus and noise cancellation', 79.99, 80, 'https://example.com/images/webcam.jpg', true, CURRENT_TIMESTAMP),
(8, 'USB-C Hub', 'Electronics', 'Multi-port USB-C hub with HDMI and card reader', 49.99, 100, 'https://example.com/images/hub.jpg', true, CURRENT_TIMESTAMP),
(9, 'Desk Lamp', 'Furniture', 'LED desk lamp with adjustable brightness and color temperature', 39.99, 60, 'https://example.com/images/lamp.jpg', true, CURRENT_TIMESTAMP),
(10, 'Noise Cancelling Headphones', 'Electronics', 'Premium wireless headphones with active noise cancellation', 349.99, 35, 'https://example.com/images/headphones.jpg', true, CURRENT_TIMESTAMP);

-- Reset sequence for products
SELECT setval('products_id_seq', (SELECT MAX(id) FROM products));

-- ========================================
-- Insert Customers
-- ========================================
INSERT INTO customers (id, full_name, email, phone, address, city, country, created_at) VALUES
(1, 'Ahmed Al-Saud', 'ahmed.alsaud@example.com', '+966501234567', 'King Fahd Road, Building 123', 'Riyadh', 'Saudi Arabia', CURRENT_TIMESTAMP),
(2, 'Fatima Al-Zahra', 'fatima.alzahra@example.com', '+966502345678', 'Corniche Road, Apartment 456', 'Jeddah', 'Saudi Arabia', CURRENT_TIMESTAMP),
(3, 'Mohammed Al-Rashid', 'mohammed.alrashid@example.com', '+966503456789', 'Prince Sultan Street, Villa 789', 'Dammam', 'Saudi Arabia', CURRENT_TIMESTAMP),
(4, 'Sara Al-Mansouri', 'sara.almansouri@example.com', '+966504567890', 'Al Olaya Street, Office 321', 'Riyadh', 'Saudi Arabia', CURRENT_TIMESTAMP),
(5, 'Khalid Al-Otaibi', 'khalid.alotaibi@example.com', '+966505678901', 'King Abdullah Road, Building 654', 'Mecca', 'Saudi Arabia', CURRENT_TIMESTAMP),
(6, 'Layla Al-Ghamdi', 'layla.alghamdi@example.com', '+966506789012', 'Al Andalus District, Villa 987', 'Medina', 'Saudi Arabia', CURRENT_TIMESTAMP),
(7, 'Omar Al-Shamrani', 'omar.alshamrani@example.com', '+966507890123', 'Prince Faisal Street, Apartment 147', 'Abha', 'Saudi Arabia', CURRENT_TIMESTAMP),
(8, 'Noura Al-Qahtani', 'noura.alqahtani@example.com', '+966508901234', 'Al Malqa District, Building 258', 'Riyadh', 'Saudi Arabia', CURRENT_TIMESTAMP);

-- Reset sequence for customers
SELECT setval('customers_id_seq', (SELECT MAX(id) FROM customers));

-- ========================================
-- Insert Orders
-- ========================================
INSERT INTO orders (id, order_number, customer_id, total_amount, status, order_date, updated_at) VALUES
(1, 'ORD-2024-001', 1, 1329.98, 'COMPLETED', CURRENT_TIMESTAMP - INTERVAL '30 days', CURRENT_TIMESTAMP - INTERVAL '28 days'),
(2, 'ORD-2024-002', 2, 449.99, 'COMPLETED', CURRENT_TIMESTAMP - INTERVAL '25 days', CURRENT_TIMESTAMP - INTERVAL '23 days'),
(3, 'ORD-2024-003', 3, 479.98, 'IN_PROGRESS', CURRENT_TIMESTAMP - INTERVAL '15 days', CURRENT_TIMESTAMP - INTERVAL '14 days'),
(4, 'ORD-2024-004', 4, 1449.98, 'COMPLETED', CURRENT_TIMESTAMP - INTERVAL '10 days', CURRENT_TIMESTAMP - INTERVAL '8 days'),
(5, 'ORD-2024-005', 5, 129.98, 'PENDING', CURRENT_TIMESTAMP - INTERVAL '5 days', NULL),
(6, 'ORD-2024-006', 6, 899.98, 'COMPLETED', CURRENT_TIMESTAMP - INTERVAL '3 days', CURRENT_TIMESTAMP - INTERVAL '1 day'),
(7, 'ORD-2024-007', 7, 349.99, 'IN_PROGRESS', CURRENT_TIMESTAMP - INTERVAL '2 days', CURRENT_TIMESTAMP - INTERVAL '1 day'),
(8, 'ORD-2024-008', 8, 189.98, 'PENDING', CURRENT_TIMESTAMP - INTERVAL '1 day', NULL);

-- Reset sequence for orders
SELECT setval('orders_id_seq', (SELECT MAX(id) FROM orders));

-- ========================================
-- Insert Order Items
-- ========================================
INSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES
(1, 1, 1, 1, 1299.99),  -- Laptop Pro
(2, 1, 2, 1, 29.99),    -- Wireless Mouse
(3, 2, 6, 1, 449.99),   -- Monitor 27" 4K
(4, 3, 4, 1, 299.99),   -- Office Chair
(5, 3, 9, 2, 39.99),    -- Desk Lamp (x2)
(6, 4, 1, 1, 1299.99),  -- Laptop Pro
(7, 4, 3, 1, 149.99),   -- Mechanical Keyboard
(8, 5, 2, 2, 29.99),    -- Wireless Mouse (x2)
(9, 5, 8, 1, 49.99),    -- USB-C Hub
(10, 5, 7, 1, 79.99),   -- Webcam HD
(11, 6, 5, 1, 599.99),  -- Standing Desk
(12, 6, 4, 1, 299.99),  -- Office Chair
(13, 7, 10, 1, 349.99), -- Noise Cancelling Headphones
(14, 8, 3, 1, 149.99),  -- Mechanical Keyboard
(15, 8, 7, 1, 79.99);   -- Webcam HD

-- Reset sequence for order_items
SELECT setval('order_items_id_seq', (SELECT MAX(id) FROM order_items));

-- ========================================
-- Insert Payments
-- ========================================
INSERT INTO payments (id, order_id, payment_method, amount_paid, billing_address, payment_status, payment_date) VALUES
(1, 1, 'Credit Card', 1329.98, 'King Fahd Road, Building 123, Riyadh', 'COMPLETED', CURRENT_TIMESTAMP - INTERVAL '30 days'),
(2, 2, 'Debit Card', 449.99, 'Corniche Road, Apartment 456, Jeddah', 'COMPLETED', CURRENT_TIMESTAMP - INTERVAL '25 days'),
(3, 3, 'Credit Card', 479.98, 'Prince Sultan Street, Villa 789, Dammam', 'COMPLETED', CURRENT_TIMESTAMP - INTERVAL '15 days'),
(4, 4, 'PayPal', 1449.98, 'Al Olaya Street, Office 321, Riyadh', 'COMPLETED', CURRENT_TIMESTAMP - INTERVAL '10 days'),
(5, 5, 'Credit Card', 129.98, 'King Abdullah Road, Building 654, Mecca', 'PENDING', NULL),
(6, 6, 'Bank Transfer', 899.98, 'Al Andalus District, Villa 987, Medina', 'COMPLETED', CURRENT_TIMESTAMP - INTERVAL '3 days'),
(7, 7, 'Credit Card', 349.99, 'Prince Faisal Street, Apartment 147, Abha', 'COMPLETED', CURRENT_TIMESTAMP - INTERVAL '2 days'),
(8, 8, 'Credit Card', 189.98, 'Al Malqa District, Building 258, Riyadh', 'PENDING', NULL);

-- Reset sequence for payments
SELECT setval('payments_id_seq', (SELECT MAX(id) FROM payments));

-- ========================================
-- Insert Shipping Records
-- ========================================
INSERT INTO shipping (id, order_id, shipping_method, tracking_number, shipped_date, expected_delivery, delivery_status, delivery_address) VALUES
(1, 1, 'Express', 'TRK001234567', CURRENT_TIMESTAMP - INTERVAL '29 days', CURRENT_TIMESTAMP - INTERVAL '27 days', 'DELIVERED', 'King Fahd Road, Building 123, Riyadh'),
(2, 2, 'Standard', 'TRK002345678', CURRENT_TIMESTAMP - INTERVAL '24 days', CURRENT_TIMESTAMP - INTERVAL '22 days', 'DELIVERED', 'Corniche Road, Apartment 456, Jeddah'),
(3, 3, 'Express', 'TRK003456789', CURRENT_TIMESTAMP - INTERVAL '14 days', CURRENT_TIMESTAMP - INTERVAL '12 days', 'IN_TRANSIT', 'Prince Sultan Street, Villa 789, Dammam'),
(4, 4, 'Express', 'TRK004567890', CURRENT_TIMESTAMP - INTERVAL '9 days', CURRENT_TIMESTAMP - INTERVAL '7 days', 'DELIVERED', 'Al Olaya Street, Office 321, Riyadh'),
(5, 5, 'Standard', NULL, NULL, CURRENT_TIMESTAMP + INTERVAL '2 days', 'PREPARING', 'King Abdullah Road, Building 654, Mecca'),
(6, 6, 'Express', 'TRK006789012', CURRENT_TIMESTAMP - INTERVAL '2 days', CURRENT_TIMESTAMP, 'DELIVERED', 'Al Andalus District, Villa 987, Medina'),
(7, 7, 'Standard', 'TRK007890123', CURRENT_TIMESTAMP - INTERVAL '1 day', CURRENT_TIMESTAMP + INTERVAL '1 day', 'IN_TRANSIT', 'Prince Faisal Street, Apartment 147, Abha'),
(8, 8, 'Standard', NULL, NULL, CURRENT_TIMESTAMP + INTERVAL '3 days', 'PREPARING', 'Al Malqa District, Building 258, Riyadh');

-- Reset sequence for shipping
SELECT setval('shipping_id_seq', (SELECT MAX(id) FROM shipping));

-- ========================================
-- Insert Returns (Sample)
-- ========================================
INSERT INTO returns (id, order_id, reason, request_date, approval_status, refund_amount, refund_status) VALUES
(1, 2, 'Product arrived damaged', CURRENT_TIMESTAMP - INTERVAL '20 days', 'APPROVED', 449.99, 'COMPLETED'),
(2, 5, 'Changed mind - no longer needed', CURRENT_TIMESTAMP - INTERVAL '4 days', 'PENDING', 129.98, 'PENDING');

-- Reset sequence for returns
SELECT setval('returns_id_seq', (SELECT MAX(id) FROM returns));

-- ========================================
-- Verification Queries (Optional)
-- ========================================
-- Uncomment to verify data insertion:

-- SELECT COUNT(*) AS product_count FROM products;
-- SELECT COUNT(*) AS customer_count FROM customers;
-- SELECT COUNT(*) AS order_count FROM orders;
-- SELECT COUNT(*) AS order_item_count FROM order_items;
-- SELECT COUNT(*) AS payment_count FROM payments;
-- SELECT COUNT(*) AS shipping_count FROM shipping;
-- SELECT COUNT(*) AS return_count FROM returns;
