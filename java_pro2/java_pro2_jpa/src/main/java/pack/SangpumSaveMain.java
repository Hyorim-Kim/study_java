package pack;

import jakarta.persistence.*;
import domain.SangpumTable;

public class SangpumSaveMain {
	public static void main(String[] args) {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("gojpa");
		EntityManager entityManager = emf.createEntityManager();
		EntityTransaction transaction = entityManager.getTransaction();
		try {
			transaction.begin();
			SangpumTable sangtab = new SangpumTable(9, "자갈2", "10", "3000");
			entityManager.persist(sangtab);
			transaction.commit();
		} catch (Exception ex) {
			ex.printStackTrace();
			transaction.rollback();
		} finally {
			entityManager.close();
		}
		emf.close();
		
		SangpumSelectMain.main(args);
	}
}
