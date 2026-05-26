import { useState } from 'react';

type Member = { i: string; n?: string };

const MEMBERS: Record<string, Member[]> = {
  board:      [{ i:'KM', n:'Kyle Matthys' }, { i:'NM', n:'Nawaf Alshaikhmubarak' }, { i:'JH', n:'James Hetherington' }],
  assoc:      [{ i:'A1' }, { i:'A2' }, { i:'A3' }, { i:'A4' }],
  legacy:     [{ i:'SA', n:'Stefan Avivson' }, { i:'CT', n:'Chelsea Toler' }, { i:'LS', n:'Lara Stein' }, { i:'GM', n:'Gregg Meyer' }],
  committees: [{ i:'C1' }, { i:'C2' }, { i:'C3' }, { i:'C4' }],
  c1: [{ i:'P1' }, { i:'P2' }], c2: [{ i:'F1' }, { i:'F2' }],
  c3: [{ i:'D1' }, { i:'D2' }], c4: [{ i:'G1' }, { i:'G2' }],
  d1: [{ i:'CF' }], d2: [{ i:'TT' }], d3: [{ i:'GF' }], d4: [{ i:'OP' }],
  d5: [{ i:'PT' }], d6: [{ i:'MK' }], d7: [{ i:'TI' }], d8: [{ i:'PC' }],
  regional: [{ i:'NY' }, { i:'LN' }, { i:'IN' }, { i:'SG' }],
  advisory: [{ i:'JL', n:'Jen Libby' }, { i:'WD', n:'Wendy Diamond' }, { i:'FT', n:'Frederick Toye' }, { i:'PB', n:'Paul Brook' }],
};

const INFOS: Record<string, string> = {
  c1: 'Oversees the College Fellowship, TRIIBE Talks, and the TRIIBE I00. Sets quality standards across every founder-facing initiative.',
  c2: 'Stewards the foundation\'s resources through budgeting, grants, financial reporting, and ensuring every dollar maximizes return on impact.',
  c3: 'Builds the relationships and resources that fuel TRIIBE\'s growth through fundraising, partnerships, donor stewardship, and network expansion.',
  c4: 'Protects the integrity of the foundation through board recruitment, bylaws, compliance, and full accountability to the mission.',
};

const TIER: Record<string, { node: string; avatar: string; panel: string }> = {
  board:     { node: 'bg-[#EEEDFE] border-[#534AB7] text-[#3C3489]', avatar: 'bg-[#AFA9EC] text-[#26215C]', panel: '' },
  assoc:     { node: 'bg-[#CECBF6] border-[#7F77DD] text-[#3C3489]', avatar: 'bg-[#7F77DD] text-white', panel: '' },
  legacy:    { node: 'bg-[#E1F5EE] border-[#0F6E56] text-[#085041]', avatar: 'bg-[#5DCAA5] text-[#085041]', panel: '' },
  committee: { node: 'bg-[#E1F5EE] border-[#1D9E75] text-[#085041]', avatar: 'bg-[#5DCAA5] text-[#085041]', panel: 'bg-[#E1F5EE] border-[#1D9E75] text-[#085041]' },
  dept:      { node: 'bg-[#F1EFE8] border-[#888780] text-[#444441]', avatar: 'bg-[#B4B2A9] text-[#2C2C2A]', panel: '' },
  regional:  { node: 'bg-[#FAECE7] border-[#993C1D] text-[#712B13]', avatar: 'bg-[#F0997B] text-[#4A1B0C]', panel: '' },
  advisory:  { node: 'bg-[#FAEEDA] border-[#854F0B] text-[#633806]', avatar: 'bg-[#EF9F27] text-[#412402]', panel: '' },
};

function initials(m: Member) {
  if (m.i) return m.i;
  if (m.n) return m.n.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return '?';
}

function Avatars({ ids, tier }: { ids: string; tier: string }) {
  const ms = (MEMBERS[ids] || []).slice(0, 4);
  const extra = (MEMBERS[ids] || []).length - 4;
  const t = TIER[tier] || TIER.dept;
  return (
    <div className="flex justify-center mb-1.5">
      {ms.map((m, i) => (
        <div key={i} title={m.n || ''} className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-medium border-2 border-white flex-shrink-0 ${t.avatar}`} style={{ marginLeft: i === 0 ? 0 : '-5px' }}>
          {initials(m)}
        </div>
      ))}
      {extra > 0 && (
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-medium border-2 border-white flex-shrink-0 ${t.avatar}`} style={{ marginLeft: '-5px' }}>
          +{extra}
        </div>
      )}
    </div>
  );
}


function ConnectorV({ h = 20 }: { h?: number }) {
  return <div className="w-px bg-gray-300 dark:bg-gray-600 self-center" style={{ height: h }} />;
}

function HLine({ leftPad, rightPad }: { leftPad: number; rightPad: number }) {
  return (
    <div className="relative h-px w-full">
      <div className="absolute top-0 h-px bg-gray-300 dark:bg-gray-600" style={{ left: leftPad, right: rightPad }} />
    </div>
  );
}

const NODE_W = 160;
const DEPT_W = 110;
const COMM_W = DEPT_W * 2;

function DeptNode({ id, label }: { id: string; label: string }) {
  const t = TIER.dept;
  return (
    <div className="flex flex-col items-center" style={{ width: DEPT_W }}>
      <ConnectorV h={14} />
      <div className={`rounded-xl border px-2 py-2 text-center w-[100px] ${t.node}`} style={{ borderWidth: '0.5px' }}>
        <Avatars ids={id} tier="dept" />
        <div className="text-[11px] font-medium leading-tight">{label}</div>
      </div>
    </div>
  );
}

function CommitteeNode({ id, label, depts }: { id: string; label: string; depts: { id: string; label: string }[] }) {
  const t = TIER.committee;
  return (
    <div className="flex flex-col items-center" style={{ width: COMM_W }}>
      <ConnectorV h={14} />
      <div className="flex flex-col items-center">
        <div className={`rounded-xl border px-3 py-2 text-center w-[148px] ${t.node}`} style={{ borderWidth: '0.5px' }}>
          <Avatars ids={id} tier="committee" />
          <div className="text-[12px] font-medium">{label}</div>
          {INFOS[id] && (
            <p className="text-[10px] mt-1.5 opacity-75 leading-relaxed text-left">
              {INFOS[id]}
            </p>
          )}
        </div>
      </div>
      <ConnectorV h={16} />
      <HLine leftPad={DEPT_W / 2} rightPad={DEPT_W / 2} />
      <div className="flex items-start" style={{ width: COMM_W }}>
        {depts.map(d => <DeptNode key={d.id} {...d} />)}
      </div>
    </div>
  );
}

const L1_ITEMS = [
  { id: 'assoc',      label: 'Associate Board',  tier: 'assoc',     sub: 'Pipeline to future directors' },
  { id: 'legacy',     label: 'Legacy Board',      tier: 'legacy',    sub: '17+ members' },
  { id: 'committees', label: 'Committees',         tier: 'committee', sub: '4 standing committees', isCommittees: true },
  { id: 'regional',   label: 'Regional MDs',       tier: 'regional',  sub: 'NY · London · India · Singapore' },
  { id: 'advisory',   label: 'Advisory Board',     tier: 'advisory',  sub: 'Per location' },
];

const COMMITTEES = [
  { id: 'c1', label: 'Programs',    depts: [{ id:'d1', label:'College Fellowship' }, { id:'d2', label:'TRIIBE Talks' }] },
  { id: 'c2', label: 'Finance',     depts: [{ id:'d3', label:'Grants & Funding' },   { id:'d4', label:'Operations' }] },
  { id: 'c3', label: 'Development', depts: [{ id:'d5', label:'Partnerships' },        { id:'d6', label:'Marketing' }] },
  { id: 'c4', label: 'Governance',  depts: [{ id:'d7', label:'TRIIBE I00' },           { id:'d8', label:'Policy' }] },
];

const LEGEND = [
  { label: 'Board',                color: '#534AB7' },
  { label: 'Associate & Legacy',   color: '#7F77DD' },
  { label: 'Committees',           color: '#1D9E75' },
  { label: 'Departments',          color: '#888780' },
  { label: 'Regional MDs',         color: '#D85A30' },
  { label: 'Advisory board',       color: '#BA7517' },
];

const L1_TOTAL = L1_ITEMS.length * NODE_W;
const COMM_TOTAL = COMMITTEES.length * COMM_W;

export default function OrgChart() {
  const [boardOpen, setBoardOpen] = useState(true);
  const [commOpen, setCommOpen] = useState(true);

  return (
    <section className="py-12 px-4 border-t border-black/10 overflow-x-auto">
      <div className="min-w-max mx-auto" style={{ width: Math.max(L1_TOTAL, COMM_TOTAL) }}>

        <p className="text-xs uppercase tracking-widest text-[#1A6B3C] mb-1">Organizational structure</p>
        <h2 className="text-2xl font-bold text-black dark:text-white mb-6">How we govern</h2>

        <div className="flex flex-wrap gap-3 mb-8">
          {LEGEND.map(l => (
            <div key={l.label} className="flex items-center gap-1.5 text-[11px] text-gray-500">
              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: l.color }} />
              {l.label}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">

          {/* Board */}
          <div className="flex flex-col items-center" style={{ width: NODE_W }}>
            <div
              className={`rounded-xl border px-3 py-2.5 text-center w-[148px] cursor-pointer transition-all hover:opacity-80 ${TIER.board.node}`}
              style={{ borderWidth: '0.5px' }}
              onClick={() => setBoardOpen(o => !o)}
            >
              <Avatars ids="board" tier="board" />
              <div className="text-[12px] font-medium">Board of Directors</div>
              <div className="text-[9px] mt-1 opacity-40">{boardOpen ? '▲ collapse' : '▼ expand'}</div>
            </div>
          </div>

          {/* L1 tier */}
          <div className={`flex flex-col items-center overflow-hidden transition-all duration-350 ease-in-out ${boardOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`} style={{ width: L1_TOTAL }}>
            <ConnectorV h={24} />
            <HLine leftPad={NODE_W / 2} rightPad={NODE_W / 2} />
            <div className="flex items-start" style={{ width: L1_TOTAL }}>
              {L1_ITEMS.map(item => {
                const t = TIER[item.tier] || TIER.dept;
                return (
                  <div key={item.id} className="flex flex-col items-center" style={{ width: NODE_W }}>
                    <ConnectorV h={14} />
                    <div
                      className={`rounded-xl border px-3 py-2 text-center w-[148px] ${t.node} ${item.isCommittees ? 'cursor-pointer hover:opacity-80' : ''}`}
                      style={{ borderWidth: '0.5px' }}
                      onClick={() => item.isCommittees && setCommOpen(o => !o)}
                    >
                      <Avatars ids={item.id} tier={item.tier} />
                      <div className="text-[12px] font-medium">{item.label}</div>
                      {item.sub && <div className="text-[10px] mt-0.5 opacity-65">{item.sub}</div>}
                      {item.isCommittees && <div className="text-[9px] mt-1 opacity-40">{commOpen ? '▲ collapse' : '▼ expand'}</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Committees + Departments */}
          <div className={`flex flex-col items-center overflow-hidden transition-all duration-350 ease-in-out ${boardOpen && commOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`} style={{ width: COMM_TOTAL }}>
            <ConnectorV h={20} />
            <HLine leftPad={COMM_W / 2} rightPad={COMM_W / 2} />
            <div className="flex items-start" style={{ width: COMM_TOTAL }}>
              {COMMITTEES.map(c => <CommitteeNode key={c.id} {...c} />)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
