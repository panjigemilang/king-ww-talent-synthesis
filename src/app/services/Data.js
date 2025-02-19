export const menus = [
  {
    id: 1,
    text: "Lu orang PUNYA berapa ha?",
    value: "punya",
  },
  {
    id: 2,
    text: "Lu orang BUTUH berapa ha?",
    value: "butuh",
  },
]

export const items = [
  {
    id: "lendir",
    title: "Lendir",
    rarity: [
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_Setpup_004_4_UI.webp",
        alt: "lendir kuning",
        type: "gold five star",
      },
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_Setpup_004_3_UI.webp",
        alt: "lendir ungu",
        type: "purple four star",
      },
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_Setpup_004_2_UI.webp",
        alt: "lendir biru",
        type: "blue three star",
      },
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_Setpup_004_1_UI.webp",
        alt: "lendir hijau",
        type: "green two star",
      },
    ],
  },
  {
    id: "biji",
    title: "Biji",
    rarity: [
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_012_UI.webp",
        alt: "biji kuning",
        type: "gold five star",
      },
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_011_UI.webp",
        alt: "biji ungu",
        type: "purple four star",
      },
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_010_UI.webp",
        alt: "biji biru",
        type: "blue three star",
      },
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_009_UI.webp",
        alt: "biji hijau",
        type: "green two star",
      },
    ],
  },
  {
    id: "daun_api",
    title: "Daun Api",
    rarity: [
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_04_UI.webp",
        alt: "daun kuning",
        type: "gold five star",
      },
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_03_UI.webp",
        alt: "daun ungu",
        type: "purple four star",
      },
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_02_UI.webp",
        alt: "daun biru",
        type: "blue three star",
      },
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_01_UI.webp",
        alt: "daun hijau",
        type: "green two star",
      },
    ],
  },
  {
    id: "spiral_bokong",
    title: "Spiral Bokong",
    rarity: [
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_008_UI.webp",
        alt: "spiral kuning",
        type: "gold five star",
      },
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_007_UI.webp",
        alt: "spiral ungu",
        type: "purple four star",
      },
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_006_UI.webp",
        alt: "spiral biru",
        type: "blue three star",
      },
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_005_UI.webp",
        alt: "spiral hijau",
        type: "green two star",
      },
    ],
  },
  {
    id: "akar_jmbt",
    title: "Akar Jmbt",
    rarity: [
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_016_UI.webp",
        alt: "akar kuning",
        type: "gold five star",
      },
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_015_UI.webp",
        alt: "akar ungu",
        type: "purple four star",
      },
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_014_UI.webp",
        alt: "akar biru",
        type: "blue three star",
      },
      {
        src: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconWup/T_IconWup_013_UI.webp",
        alt: "akar hijau",
        type: "green two star",
      },
    ],
  },
]

export const dataKalkulasi = (butuh, punya) => {
  const convertWithRequirement = (val = 0, req = 0) => {
    const conversionRate = 3
    let kembalian = val
    let count = 0

    while (kembalian - conversionRate >= req) {
      count++
      kembalian -= conversionRate
    }

    return {
      dapet: count,
      kembali: kembalian,
    }
  }

  const calculatePassed = (val = 0, req) => {
    if (req) {
      if (val >= req) return "text-green-500"
      else if (val + 7 >= req) return "text-amber-400"
      else return "text-red-600"
    }

    return "text-white"
  }

  const convertingData = (data, requirementRarity = {}) => {
    const { title, rarity } = data
    const requirement = requirementRarity[title] || {}
    const counts = {
      gold: 0,
      purple: 0,
      blue: 0,
      green: 0,
    }

    rarity.forEach((r) => {
      if (counts.hasOwnProperty(r.type)) {
        counts[r.type] = r.count || 0
      }
    })

    const { dapet: blueVal, kembali: greenChanges } = convertWithRequirement(
      counts.green,
      requirement.green
    )
    const { dapet: purpleVal, kembali: blueChanges } = convertWithRequirement(
      counts.blue + blueVal,
      requirement.blue
    )
    const { dapet: goldVal, kembali: purpleChanges } = convertWithRequirement(
      counts.purple + purpleVal,
      requirement.purple
    )

    const updatedRarities = [
      {
        type: "gold",
        count: counts.gold + goldVal,
        passed: calculatePassed(counts.gold + goldVal, requirement.gold),
      },
      {
        type: "purple",
        count: purpleChanges,
        passed: calculatePassed(purpleChanges, requirement.purple),
      },
      {
        type: "blue",
        count: blueChanges,
        passed: calculatePassed(blueChanges, requirement.blue),
      },
      {
        type: "green",
        count: greenChanges,
        passed: calculatePassed(greenChanges, requirement.green),
      },
    ].filter((r) => r.count > 0)
    console.log("Naon tea", updatedRarities)

    return { ...data, rarity: updatedRarities }
  }

  const getRequirementRarity = (data) => {
    // Extract rarity object from requirement for easier manipulation
    let result = {}

    data.map((item) => {
      result[item.title] = item.rarity.reduce((acc, curr) => {
        acc[curr.type] = curr.count
        return acc
      }, {})
    })

    return result
  }

  // kalkulasi kebutuhan
  if (butuh.length > 0 && punya.length > 0) {
    // nyari apa yg punya ada di 'butuh'
    const found = punya.find((p) => butuh.find((b) => b.title === p.title))
    // kalo gk nemu, convert max si 'punya'
    if (!found) return punya.map((f) => convertingData(f))
    // kalkulasi normal
    else {
      const requirementRarity = getRequirementRarity(butuh)
      const filteredData = punya.filter((p) =>
        Object.keys(requirementRarity).includes(p.title)
      )
      const excludedData = punya.filter(
        (p) => !Object.keys(requirementRarity).includes(p.title)
      )
      let convertedToMax = []
      // convert to max data that excluded from 'butuh'
      if (excludedData.length)
        convertedToMax = excludedData.map((f) => convertingData(f))

      const result = filteredData.map((f) =>
        convertingData(f, requirementRarity)
      )

      if (convertedToMax.length) return [...result, ...convertedToMax]

      return result
    }
  }
  // ini konvert max biasa
  else if (punya.length > 0) {
    return punya.map((f) => convertingData(f))
  }

  return []
}
