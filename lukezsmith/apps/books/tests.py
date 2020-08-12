import unittest
from selenium import webdriver


# book test suite
class TestBooks(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    # test POST request of new book to api
    def test_new_book_fire(self):
        self.driver.get("http://localhost:8000/api-site/books/books")
        self.driver.find_element_by_id('id_title').send_keys("test title")
        self.driver.find_element_by_id(
            'id_amazon_url').send_keys("test amazon url")
        self.driver.find_element_by_id('submit').click()
        self.assertIn("http://localhost:8000/api-site/books/books",
                      self.driver.current_url)

    def tearDown(self):
        self.driver.quit


if __name__ == '__main__':
    unittest.main()
