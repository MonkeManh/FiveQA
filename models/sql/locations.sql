CREATE TABLE locations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL,
    postal VARCHAR(4) NOT NULL,
    mainStreet VARCHAR(256) NOT NULL,
    crossStreet1 VARCHAR(256) NOT NULL,
    crossStreet2 VARCHAR(256) NOT NULL,
    apt VARCHAR(256) NULL,
    twp VARCHAR(256) NULL,
    municp VARCHAR(256) NULL,
    cids TEXT NULL,
    hasHeli BOOLEAN NOT NULL DEFAULT FALSE,
    fireBox VARCHAR(256) NOT NULL,

    fdDistrict ENUM(
        "01","02","03","04","05","06","07","08","09","10","11","12"
    ) NOT NULL,
    fdRunOrder JSON NOT NULL,

    pdDistrict ENUM(
        "RCSO","MBPD","BCSO","PBPD","SAHP","SSPD","LCSO","LSPD"
    ) NOT NULL,
    pdRunOrder JSON NOT NULL,

    post ENUM("North","South") NOT NULL,
    patrolArea ENUM("1","2","3","4","5","6","7") NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    created_by varchar(36) NOT NULL,
    updated_by varchar(36),

    CONSTRAINT fk_locations_created_by FOREIGN KEY (created_by) REFERENCES users(id),
    CONSTRAINT fk_locations_updated_by FOREIGN KEY (updated_by) REFERENCES users(id)
);
