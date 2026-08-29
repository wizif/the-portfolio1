import pypdf

reader = pypdf.PdfReader(r"w:\vs code\Practice\PORTFOLIO\WPortfolio\src\assets\Images\resume.pdf")
with open("extracted_resume.txt", "w", encoding="utf-8") as f:
    f.write(f"Total pages: {len(reader.pages)}\n")
    for i, page in enumerate(reader.pages):
        f.write(f"--- Page {i+1} ---\n")
        f.write(page.extract_text() or "")
        f.write("\n")
print("Done writing to extracted_resume.txt")
