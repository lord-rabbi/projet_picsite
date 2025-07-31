-- Base de données pour picApic
CREATE DATABASE IF NOT EXISTS picapic;
USE picapic;

-- Table des projets du portfolio
CREATE TABLE IF NOT EXISTS projets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(255),
    lien VARCHAR(255),
    categorie ENUM('web', 'mobile', 'design') DEFAULT 'web',
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    actif BOOLEAN DEFAULT TRUE
);

-- Table des administrateurs
CREATE TABLE IF NOT EXISTS admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion d'un admin par défaut (mot de passe: admin123)
INSERT INTO admins (username, password, email) VALUES 
('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin@picapic.com');

-- Projets d'exemple
INSERT INTO projets (titre, description, image, lien, categorie) VALUES 
('E-commerce Fashion', 'Plateforme e-commerce moderne avec paiement intégré et gestion des stocks', '/placeholder.svg?height=300&width=400', 'https://example.com', 'web'),
('App Mobile Banking', 'Application mobile de banque avec authentification biométrique', '/placeholder.svg?height=300&width=400', 'https://example.com', 'mobile'),
('Dashboard Analytics', 'Interface d\'administration avec graphiques et analytics en temps réel', '/placeholder.svg?height=300&width=400', 'https://example.com', 'web'),
('App Fitness Tracker', 'Application de suivi fitness avec géolocalisation et coaching', '/placeholder.svg?height=300&width=400', 'https://example.com', 'mobile');
