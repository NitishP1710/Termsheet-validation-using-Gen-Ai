export const termSheetTypes = [
    {
      id: 'ma',
      name: 'M&A Term Sheet',
      description: 'Customize merger and acquisition agreement templates',
      sections: [
        {
          title: 'Transaction Overview',
          fields: [
            { id: 'company_names', label: 'Company Names (Acquirer & Target)' },
            { id: 'deal_type', label: 'Deal Type (Merger, Acquisition, Asset Sale, Stock Sale)' },
            { id: 'purchase_price', label: 'Purchase Price & Payment Terms' },
            { id: 'due_diligence', label: 'Due Diligence Period' },
          ],
        },
      ],
    },
    {
      id: 'loan',
      name: 'Loan & Debt Term Sheet',
      description: 'Structure and validate loan agreements',
      sections: [
        {
          title: 'Loan Details',
          fields: [
            { id: 'loan_amount', label: 'Loan Amount & Currency' },
            { id: 'interest_rate', label: 'Interest Rate Type (Fixed/Floating)' },
            { id: 'loan_term', label: 'Loan Term & Repayment Schedule' },
          ],
        },
      ],
    },
    {
      id: 'realestate',
      name: 'Real Estate Term Sheet',
      description: 'Customize property transaction templates',
      sections: [
        {
          title: 'Property & Transaction Details',
          fields: [
            { id: 'property_address', label: 'Property Address & Type' },
            { id: 'purchase_price', label: 'Purchase Price or Lease Amount' },
            { id: 'payment_structure', label: 'Payment Structure' },
          ],
        },
      ],
    },
    {
      id: 'jv',
      name: 'Joint Venture Term Sheet',
      description: 'Create joint venture agreement templates',
      sections: [
        {
          title: 'General JV Details',
          fields: [
            { id: 'participating_companies', label: 'Name of Participating Companies' },
            { id: 'business_purpose', label: 'Business Purpose & Scope of JV' },
            { id: 'jv_duration', label: 'JV Duration & Termination Criteria' },
          ],
        },
      ],
    },
    {
      id: 'investment',
      name: 'Investment Term Sheet',
      description: 'Outline key investment deal terms',
      sections: [
        {
          title: 'Investment Details',
          fields: [
            { id: 'investor_name', label: 'Investor Name' },
            { id: 'company_name', label: 'Company Name' },
            { id: 'investment_amount', label: 'Investment Amount & Equity Stake' },
            { id: 'valuation', label: 'Pre-Money & Post-Money Valuation' },
            { id: 'vesting_schedule', label: 'Founder Vesting Schedule' },
          ],
        },
        {
          title: 'Legal & Financial Terms',
          fields: [
            { id: 'liquidation_preference', label: 'Liquidation Preference' },
            { id: 'board_seat', label: 'Investor Board Seat Allocation' },
            { id: 'anti_dilution', label: 'Anti-Dilution Provisions' },
          ],
        },
      ],
    },
  ];
  