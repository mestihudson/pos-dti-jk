#!/bin/sh -x
cd src
rm -frv *.bbl *.out *.log *.pdf *.blg *.brf *.toc *.aux && pdflatex main && bibtex main && pdflatex main && pdflatex main
