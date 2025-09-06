-- Switch Waste Management Solutions Database Schema
-- Version: 1.0
-- Created: 2025-01-01
-- Description: Complete database schema for waste management website

CREATE DATABASE IF NOT EXISTS switch_waste_db
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE switch_waste_db;

-- ============================================================================
-- CONTACT INQUIRIES TABLE
-- ============================================================================
CREATE TABLE contact_inquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(100),
    service VARCHAR(50),
    waste_volume VARCHAR(50),
    collection_frequency VARCHAR(50),
    message TEXT NOT NULL,
    consent BOOLEAN DEFAULT TRUE,
    newsletter BOOLEAN DEFAULT FALSE,
    status ENUM('new', 'contacted', 'quoted', 'converted', 'closed') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at),
    INDEX idx_service (service)
);

-- ============================================================================
-- SERVICES TABLE
-- ============================================================================
CREATE TABLE services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    features JSON,
    price_range VARCHAR(50),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_slug (slug),
    INDEX idx_active (is_active)
);

-- Insert initial services data
INSERT INTO services (name, slug, description, features, price_range) VALUES
(
    'Healthcare Risk Waste Management',
    'healthcare-waste',
    'Professional containment, collection, treatment, and disposal of healthcare risk waste (HCRW) with complete regulatory compliance.',
    JSON_ARRAY(
        'Sharps disposal and management',
        'Contaminated PPE handling',
        'Laboratory specimens processing',
        'Surgical waste treatment',
        'Blood bags and tubing disposal',
        'Regulatory compliance documentation',
        'Secure transportation',
        'Treatment certificates'
    ),
    'Contact for quote'
),
(
    'Pharmaceutical Waste Disposal',
    'pharmaceutical',
    'Safe and compliant disposal of pharmaceutical waste including expired medications, antibiotics, injectables, and controlled substances.',
    JSON_ARRAY(
        'Expired medications disposal',
        'Antibiotics and antimicrobials',
        'Injectable drugs and vaccines',
        'Chemotherapy drugs handling',
        'Controlled substances management',
        'Secure destruction methods',
        'Environmental compliance',
        'Documentation and tracking'
    ),
    'Contact for quote'
);
