from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto('http://localhost:3000/en')
        page.wait_for_timeout(3000)  # Wait for GSAP animations
        page.screenshot(path='/home/jules/verification/home-page-phase1-ver2.png', full_page=True)
        print("Screenshot saved to /home/jules/verification/home-page-phase1-ver2.png")
        browser.close()

if __name__ == '__main__':
    run()
