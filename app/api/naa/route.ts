import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { answer, wallet } = await request.json();

    if (!answer || !wallet) {
      return NextResponse.json({ error: 'Missing answer or wallet' }, { status: 400 });
    }

    // The Logic (Simple Keyword Heuristic for MVP)
    // Real version would use an LLM classifier here.
    const lowerAnswer = answer.toLowerCase();
    
    // Oracle Traits: "Yes", "Execute", "Code", "Rules"
    const oracleKeywords = ['yes', 'execute', 'code is law', 'rules', 'protocol', 'valid'];
    
    // Glitch Traits: "No", "Pause", "Suspicious", "Context", "Human", "Review"
    const glitchKeywords = ['no', 'pause', 'wait', 'suspicious', 'human', 'context', 'review', 'fraud'];

    let oracleScore = 0;
    let glitchScore = 0;

    oracleKeywords.forEach(k => { if (lowerAnswer.includes(k)) oracleScore++; });
    glitchKeywords.forEach(k => { if (lowerAnswer.includes(k)) glitchScore++; });

    let archetype = 'WEAVER'; // Default (Balanced)
    if (oracleScore > glitchScore) archetype = 'ORACLE';
    if (glitchScore > oracleScore) archetype = 'GLITCH';

    // Mock Signature (In prod, this would be a real EAS attestation hash)
    const signature = `0xSIGNED_${archetype}_${Date.now()}`;

    return NextResponse.json({
      archetype,
      scores: { oracle: oracleScore, glitch: glitchScore },
      signature,
      status: 'VERIFIED'
    });

  } catch (error) {
    return NextResponse.json({ error: 'Assessment failed' }, { status: 500 });
  }
}
