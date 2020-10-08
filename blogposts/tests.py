import unittest
from selenium import webdriver

# blogposts test suite


class TestBlogposts(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    # test POST request of new blogpost to api
    def test_new_post_fire(self):
        self.driver.get("http://localhost:8000/add/")
        self.driver.find_element_by_id('id_title').send_keys("test title")
        self.driver.find_element_by_id('id_body').send_keys("test body")
        self.driver.find_element_by_id('submit').click()
        self.assertIn("http://localhost:8000/", self.driver.current_url)

    def tearDown(self):
        self.driver.quit


if __name__ == '__main__':
    unittest.main()
