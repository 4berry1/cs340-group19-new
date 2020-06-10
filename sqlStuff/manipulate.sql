DELIMITER //
CREATE TRIGGER before_insert_merch BEFORE INSERT ON merch
FOR EACH ROW
BEGIN
	IF (NEW.quantity > 9999)
    	THEN
        	set NEW.quantity = 9999;
    ELSEIF (NEW.quantity < 0)
    	THEN
        	SET NEW.quantity = 0;
    END IF;
END;
//
DELIMITER ;
