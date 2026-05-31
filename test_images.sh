#!/bin/bash
images=(
  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop" # 1. Hero background (Suits)
  "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=1000&auto=format&fit=crop" # 2. Suit Collection 1
  "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop" # 3. Suit Collection 2
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop" # 4. Suit Collection 3
  "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=1000&auto=format&fit=crop" # 5. Master Tailor replacement
  "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop" # 6. Measuring tape
)

for url in "${images[@]}"; do
  status=$(curl -o /dev/null -s -w "%{http_code}\n" "$url")
  if [ "$status" -eq 200 ]; then
    echo "✅ $url - OK"
  else
    echo "❌ $url - FAILED ($status)"
  fi
done
